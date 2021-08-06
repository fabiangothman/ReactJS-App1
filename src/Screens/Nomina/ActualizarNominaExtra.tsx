import { useContext, useEffect, useState } from 'react';
import { Button, FormControl, Spinner, Table } from 'react-bootstrap';
import "firebase/firestore";
import "firebase/storage";
import { useFirebaseApp } from "reactfire";
import DataSheet from 'react-datasheet';
import { FaSave, FaListAlt } from 'react-icons/fa';		//https://react-icons.github.io/react-icons/icons?name=fa
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
//Components
import { CompanyContext } from '../../Providers/CompanyDataProvider';
//Interfaces
import { INomina } from '../../Components/Nomina/INomina';
import { INominaExtra, INominaExtraInit } from '../../Components/NominaExtra/INominaExtra';
//Helpers
import { AcademicBackgroundList, AreasList, DependentsList, PositionsList, SeniorityList } from '../../Helpers/Data';
import { ValidateExtraComplete } from '../../Components/NominaExtra/NominaExtraHelpers';
//Styles
import '../../Styles/Nomina/actualizarNominaExtra.css';
import 'react-datasheet/lib/react-datasheet.css';

interface GridType {
	value: string|null;
	readOnly: boolean;
	uploadDate: number;
}
interface NominaExtraEdited {
	nominaExtra: INominaExtra;
	document: number|null;
}
type INominaWithCompleted = {
	nomina: INomina;
	completed: boolean;
};
const ActualizarNominaExtra = () => {
	const { data: company, setData } = useContext(CompanyContext);
	const firebase = useFirebaseApp();	

	const [gridData, setGridData] = useState<GridType[][]>([]);
	const [getData, setGetData] = useState<boolean>(true);
	const [isSaving, setIsSaving] = useState<boolean>(false);

	const handleSave = async () => {
		setIsSaving(true);
		await Promise.all(gridData.map(async (row) => {
			let objNominaExtraModified: NominaExtraEdited = {
				nominaExtra: INominaExtraInit,
				document: null
			};
			if(row[0].value){
				objNominaExtraModified = {
					nominaExtra: {
						email: (row[3].value) ? row[3].value : "",
						area: (row[4].value) ? row[4].value : "",
						position: (row[5].value) ? row[5].value : "",
						positionLevel: (row[6].value) ? row[6].value : "",
						dependents: (row[7].value==="") ? null : (row[7].value==="SI"),
						seniority: (row[8].value) ? row[8].value : "",
						experience: (row[9].value) ? parseInt(row[9].value) : null,
						academicBackground: (row[10].value) ? row[10].value : ""
					},
					document: (row[0].value) ? parseInt(row[0].value) : null
				}

				await firebase.firestore().collection('payrolles')
				.doc(row[0].value)
				.collection("nominasUploaded")
				.doc(row[0].uploadDate.toString()).update({
					nominaExtra: objNominaExtraModified.nominaExtra
				});
			}
			return objNominaExtraModified;
		})).then((arrNewNominasExtra) => {
			let nominasCopy: INomina[] = [...company.companyNomina];
			let isCompletedCompanyNominaExtra: boolean = true;

			const arrNominasWithCompleted: INominaWithCompleted[] = nominasCopy.map(nomina => {
				const index: number = arrNewNominasExtra.findIndex(obj => obj.document===nomina.nominaElectronica.Trabajador.NumeroDocumento);
				if(index!==-1){
					nomina.nominaExtra = arrNewNominasExtra[index].nominaExtra;
				}
				const isCompleted = ValidateExtraComplete(nomina.nominaExtra);
				if(isCompletedCompanyNominaExtra)
					isCompletedCompanyNominaExtra = isCompleted;
				return {
					nomina,
					completed: isCompleted
				};
			});
			/*	Order by empty nominaExtra */
			const arrNominas: INomina[] = arrNominasWithCompleted.sort((a, b) => Number(a.completed)-Number(b.completed)).map(nominaWithCompleted => nominaWithCompleted.nomina);

			const isComplete: boolean = (isCompletedCompanyNominaExtra && (arrNominas.length > 0));
			setData({
				...company,
				companyNomina: arrNominas,
				isCompletedNominaExtra: isComplete
			});
			if(isComplete){
				toast.success(`Se ha guardado la nómina con éxito, ya se encuentra completa toda tu nómina.`);
			}else{
				toast.warning(`Se ha guardado la nómina con éxito, pero recuerda que aún se encuentra incompleta, termina de llenar todos los campos.`);
			}
		}).catch(e => {
			console.log(e);
			toast.error(`Ocurrió un error al guardar la nómina, por favor intenta mas tarde: `, e);
		});
		setIsSaving(false);
	}

  	useEffect(() => {
		document.title = "Actualizar nómina extra";
	}, []);

	if(company.isReady && getData){
		setGetData(false);

		const excelData: GridType[][] = company.companyNomina.map(nomina => {
			const row: GridType[] = [
				{ value: nomina.nominaElectronica.Trabajador.NumeroDocumento.toString(), readOnly: true, uploadDate: nomina.uploadDate },
				{ value: `${nomina.nominaElectronica.Trabajador.PrimerNombre} ${nomina.nominaElectronica.Trabajador.OtrosNombres}`, readOnly: true, uploadDate: nomina.uploadDate },
				{ value: `${nomina.nominaElectronica.Trabajador.PrimerApellido} ${nomina.nominaElectronica.Trabajador.SegundoApellido}`, readOnly: true, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.email, readOnly: false, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.area, readOnly: false, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.position, readOnly: false, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.positionLevel, readOnly: false, uploadDate: nomina.uploadDate },
				{ value: (nomina.nominaExtra.dependents===null) ? "" : (nomina.nominaExtra.dependents.toString()==="true") ? "SI" : "NO", readOnly: false, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.seniority, readOnly: false, uploadDate: nomina.uploadDate },
				{ value: (nomina.nominaExtra.experience===null) ? "" : nomina.nominaExtra.experience.toString(), readOnly: false, uploadDate: nomina.uploadDate },
				{ value: nomina.nominaExtra.academicBackground, readOnly: false, uploadDate: nomina.uploadDate }
			];
			return row;
		});
		setGridData(excelData);
	}
	
	return (!company.isReady) ? (
		<div className="spinner-container">
			<Spinner className="spinner" animation="border" role="status" />
		</div>
	) : (
		<div id="actualizar_nomina_extra">
			<header className="header-container">
				<h3>Actualizar nómina extra</h3>
			</header>
			<div className="body">
				<p className="description-text">A continuación edita la información adicional de tu nómina. Completala para acceder a las características adicionales de WorkForce. Una vez finalices, no olvides <i>Guardar</i> tus cambios.</p>
				<Button
					variant="success"
					className="btn-save mr-2"
					onClick={() => handleSave()}
				>
					{(isSaving) ? (
						<Spinner className="spinner" animation="border" role="status" />
					) : <span><FaSave /> Guardar</span>}
				</Button>
				<Link to="/nomina/" className="link">
					<Button variant="outline-primary" className="btn-back"><FaListAlt /> VER NÓMINA</Button>
				</Link>
				<DataSheet
					data={gridData}
					valueRenderer={cell => (cell.value===null) ? "" : cell.value.toString()}
					onContextMenu={(e, cell) => cell.readOnly ? e.preventDefault() : null }
					onCellsChanged={changes => {
						const grid = gridData;
						changes.forEach((change) => {
							grid[change.row][change.col] = { ...grid[change.row][change.col], value: (change.value) ? change.value : "" };
						});
						setGridData(grid);
					}}
					dataEditor={props => {
						if(props.col===3){
							return <FormControl onChange={(e) => props.onChange(e.target.value)} value={(props.value===null) ? "": props.value} type="email" className="" />
						}else if(props.col===4){
							return (
								<FormControl
									onChange={(e) => props.onChange(e.target.value)}
									value={(props.value===null) ? "": props.value}
									as="select"
									className=""
								>
									<option value="" disabled={true}>Seleccione</option>
									{AreasList.map((area, i) => (
										<option key={i} value={area}>{area}</option>
									))}
								</FormControl>
							);
						}else if(props.col===5){
							return (
								<FormControl
									onChange={(e) => props.onChange(e.target.value)}
									value={(props.value===null) ? "": props.value}
									as="select"
									className=""
								>
									<option value="" disabled={true}>Seleccione</option>
									{PositionsList.map((position, i) => (
										<option key={i} value={position}>{position}</option>
									))}
								</FormControl>
							);
						}else if(props.col===6){
							return <FormControl onChange={(e) => props.onChange(e.target.value)} value={(props.value===null) ? "": props.value} type="text" className="" />
						}else if(props.col===7){
							return (
								<FormControl
									onChange={(e) => props.onChange(e.target.value)}
									value={(props.value===null) ? "": props.value}
									as="select"
									className=""
								>
									<option value="" disabled={true}>Seleccione</option>
									{DependentsList.map((dependent, i) => (
										<option key={i} value={dependent}>{dependent}</option>
									))}
								</FormControl>
							);
						}else if(props.col===8){
							return (
								<FormControl
									onChange={(e) => props.onChange(e.target.value)}
									value={(props.value===null) ? "": props.value}
									as="select"
									className=""
								>
									<option value="" disabled={true}>Seleccione</option>
									{SeniorityList.map((seniority, i) => (
										<option key={i} value={seniority}>{seniority}</option>
									))}
								</FormControl>
							);
						}else if(props.col===9){
							return <FormControl onChange={(e) => props.onChange(e.target.value)} value={(props.value===null) ? "": props.value} type="number" className="" />
						}else if(props.col===10){
							return (
								<FormControl
									onChange={(e) => props.onChange(e.target.value)}
									value={(props.value===null) ? "": props.value}
									as="select"
									className=""
								>
									<option value="" disabled={true}>Seleccione</option>
									{AcademicBackgroundList.map((academicBackground, i) => (
										<option key={i} value={academicBackground}>{academicBackground}</option>
									))}
								</FormControl>
							);
						}else{
							return <FormControl onChange={(e) => props.onChange(e.target.value)} value={(props.value===null) ? "": props.value} type="text" className="" />
						}
					}}
					sheetRenderer={props => (
						<Table id="nominaextra-list" className={props.className + ' '} striped bordered={true} hover size="sm">
							<thead>
								<tr>
									<th className="col-title">Documento</th>
									<th className="col-title">Nombres</th>
									<th className="col-title">Apellidos</th>
									<th className="col-title">Correo</th>
									<th className="col-title">Área</th>
									<th className="col-title">Cargo</th>
									<th className="col-title">Nivel de cargo</th>
									<th className="col-title">Personas a cargo</th>
									<th className="col-title">Seniority</th>
									<th className="col-title">Experiencia</th>
									<th className="col-title">Formación</th>
								</tr>
							</thead>
							<tbody>
								{props.children}
							</tbody>
						</Table>
					)}
				/>
			</div>
		</div>
	);
}
export default ActualizarNominaExtra;
