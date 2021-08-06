//Libraries
import { useContext, useState, useEffect } from 'react';
import { Button, FormControl, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch, BsPencil, BsFillPersonPlusFill } from "react-icons/bs";	//https://react-icons.github.io/react-icons/icons?name=bs
import { toast } from 'react-toastify';
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";
//Components
import { CompanyContext } from '../../Providers/CompanyDataProvider';
import NominaList from '../../Components/Nomina/NominaList';
//Interfaces
import { INominaExtra } from '../../Components/NominaExtra/INominaExtra';
import { INomina } from '../../Components/Nomina/INomina';
//Styles
import '../../Styles/Nomina/nomina.css';
import { ValidateExtraComplete } from '../../Components/NominaExtra/NominaExtraHelpers';

interface EditMode {
	status: boolean,
    rowKey: number|null
}
type CheckboxItem = {
	document: number;
	value: boolean;
}
type TypePromiseDelete = {
	companyPayrolDocsList: number[];
	companyNomina: INomina[];
	isCompletedNominaExtra: boolean;
}
const Nomina = () => {
	const { data: company, setData } = useContext(CompanyContext);
	const firebase = useFirebaseApp();

	const [email, setEmail] = useState<string>("");
	const [area, setArea] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [positionLevel, setPositionLevel] = useState<string>("");
	const [dependents, setDependents] = useState<boolean|null>(null);
	const [seniority, setSeniority] = useState<string>("");
	const [experience, setExperience] = useState<number|null>(null);
	const [academicBackground, setAcademicBackground] = useState<string>("");
	const [inEditMode, setInEditMode] = useState<EditMode>({
        status: false,
        rowKey: null
    });
	const [checkedList, setCheckedList] = useState<CheckboxItem[]>([]);
	const [search, setSearch] = useState<string>("");
	const [orderBy, setOrderBy] = useState<string>("-1");
	const [nominas, setNominas] = useState<INomina[]>([]);
	const [settingNomina, setSettingNomina] = useState<boolean>(true);
	if(settingNomina && company.isReady){
		setNominas(company.companyNomina);
		setSettingNomina(false);
	}

	const onEdit = (nominaExtra: INominaExtra, document: number) => {
        setInEditMode({
            status: true,
            rowKey: document
        });
        setEmail(nominaExtra.email);
		setPosition(nominaExtra.position);
		setPositionLevel(nominaExtra.positionLevel);
		setArea(nominaExtra.area);
		setDependents(nominaExtra.dependents);
		setSeniority(nominaExtra.seniority);
		setExperience(nominaExtra.experience);
		setAcademicBackground(nominaExtra.academicBackground);
    }

	const onDelete = async (itemsSelected: CheckboxItem[], confirmAlert: boolean = true) => {
		if((confirmAlert===false) || (confirmAlert && window.confirm(`Está seguro que desea eliminar la información de la nómina? Recuerde que esta acción es irreversible.`))){
			let itemsToDelete: number[] = [];
			itemsSelected.forEach(selected => (selected.value===true) ? itemsToDelete.push(selected.document): "");

			const clientTimestamp = + new Date();
			let nominasToModify = [...nominas];

			await Promise.all(itemsToDelete.map(async (document, i) => {
				nominasToModify = nominasToModify.filter(obj => obj.nominaElectronica.Trabajador.NumeroDocumento !== document);
				const newArrDocs: number[] = nominasToModify.map(nomina => nomina.nominaElectronica.Trabajador.NumeroDocumento);

				await firebase.firestore().collection('company_payrolles')
				.doc(company.companyNit.toString())
				.collection("companyNominasUploaded")
				.doc(clientTimestamp.toString())
				.set({
					uploadDate: clientTimestamp,
					jsonNominaNumDocs: JSON.stringify(newArrDocs)
				}, {merge: true});

				const isCompletedNominaExtra = nominasToModify.map(nomina => {
					return ValidateExtraComplete(nomina.nominaExtra);
				});

				const resp: TypePromiseDelete = {
					companyPayrolDocsList: newArrDocs,
					companyNomina: nominasToModify,
					isCompletedNominaExtra: !isCompletedNominaExtra.includes(false)
				}
				return resp;
			})).then((arrResp) => {
				const newNomina = arrResp[arrResp.length - 1];
				setData({
					...company,
					companyPayrolDocsList: newNomina.companyPayrolDocsList,
					companyNomina: newNomina.companyNomina,
					isCompletedNominaExtra: (newNomina.isCompletedNominaExtra && (newNomina.companyNomina.length > 0))
				});
				setNominas(newNomina.companyNomina);
				toast.warning(`Se han eliminado los registros seleccionados con éxito.`);
			}).catch(e => {
				toast.error("Ocurrió un error al tratar de eliminar masivamente la nómina: "+e);
				console.log(e);
			});
		}
    }

	const onSave = async (nominaEdited: INominaExtra, document: number) => {
		const index: number = nominas.findIndex(obj => obj.nominaElectronica.Trabajador.NumeroDocumento===document);
		
		if(index!==-1){
			const objNominaExtraModified: INominaExtra = {
				academicBackground: nominaEdited.academicBackground,
				area: nominaEdited.area,
				dependents: nominaEdited.dependents,
				email: nominaEdited.email,
				experience: nominaEdited.experience,
				position: nominaEdited.position,
				positionLevel: nominaEdited.positionLevel,
				seniority: nominaEdited.seniority
			}
			let nominasCopy = [...nominas];
			let toUpdate = {...nominasCopy[index]};

			await firebase.firestore().collection('payrolles')
			.doc(toUpdate.nominaElectronica.Trabajador.NumeroDocumento.toString())
			.collection("nominasUploaded")
			.doc(toUpdate.uploadDate.toString()).update({
				nominaExtra: objNominaExtraModified
			}).then(() => {
				toUpdate.nominaExtra = objNominaExtraModified;
				nominasCopy[index] = toUpdate;

				const isCompletedNominaExtra = nominasCopy.map(nomina => {
					return ValidateExtraComplete(nomina.nominaExtra);
				});
				setData({
					...company,
					companyNomina: nominasCopy,
					isCompletedNominaExtra: !isCompletedNominaExtra.includes(false)
				});
				setNominas(nominasCopy);
				toast.success(`Se ha actualizado la nómina con éxito.`);
			}).catch(e => {
				console.log(e);
				toast.error(`Ocurrió un error al actualizar la nómina, por favor intenta mas tarde: `, e);
			});
		}else{
			toast.error(`No se encontró la el documento ${document} a modificar, recarga la página e intentalo nuevamente.`);
		}
		onCancel();
    }

	const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        setEmail("");
		setPosition("");
		setArea("");
		setDependents(false);
		setPositionLevel("");
		setSeniority("");
		setExperience(0);
		setAcademicBackground("");
    }

	const handleSearch = (value?: string) => {
		const toSearch: string = (value!==undefined) ? value : search;
		if(value!==undefined){
			setSearch(toSearch);
		}
		
		let newNominas = [...company.companyNomina];
		if(toSearch!==""){
			newNominas = newNominas.filter(obj => {
				const fullName: string = `${obj.nominaElectronica.Trabajador.PrimerNombre} ${obj.nominaElectronica.Trabajador.OtrosNombres} ${obj.nominaElectronica.Trabajador.PrimerApellido} ${obj.nominaElectronica.Trabajador.SegundoApellido}`;
				return (fullName.toString().toLowerCase().includes(toSearch.toLowerCase()) || obj.nominaElectronica.Trabajador.NumeroDocumento.toString().toLowerCase().includes(toSearch.toLowerCase())) ? true : false;
			});
		}
		setNominas(newNominas);
		setOrderBy("-1");
	}

	const handleOrderBy = (value: string) => {
		setOrderBy(value);
		const newNominas = [...nominas];

		switch (value){
			case "1": newNominas.sort((a,b) => (a.nominaElectronica.Trabajador.PrimerApellido > b.nominaElectronica.Trabajador.PrimerApellido) ? 1 : ((b.nominaElectronica.Trabajador.PrimerApellido > a.nominaElectronica.Trabajador.PrimerApellido) ? -1 : 0)); break;
			case "2": newNominas.sort((a,b) => (b.nominaElectronica.Trabajador.PrimerApellido > a.nominaElectronica.Trabajador.PrimerApellido) ? 1 : ((a.nominaElectronica.Trabajador.PrimerApellido > b.nominaElectronica.Trabajador.PrimerApellido) ? -1 : 0)); break;
			case "3": newNominas.sort((a,b) => (a.nominaElectronica.Trabajador.SegundoApellido > b.nominaElectronica.Trabajador.SegundoApellido) ? 1 : ((b.nominaElectronica.Trabajador.SegundoApellido > a.nominaElectronica.Trabajador.SegundoApellido) ? -1 : 0)); break;
			case "4": newNominas.sort((a,b) => (b.nominaElectronica.Trabajador.SegundoApellido > a.nominaElectronica.Trabajador.SegundoApellido) ? 1 : ((a.nominaElectronica.Trabajador.SegundoApellido > b.nominaElectronica.Trabajador.SegundoApellido) ? -1 : 0)); break;
			case "5": newNominas.sort((a,b) => (a.nominaElectronica.Trabajador.PrimerNombre > b.nominaElectronica.Trabajador.PrimerNombre) ? 1 : ((b.nominaElectronica.Trabajador.PrimerNombre > a.nominaElectronica.Trabajador.PrimerNombre) ? -1 : 0)); break;
			case "6": newNominas.sort((a,b) => (b.nominaElectronica.Trabajador.PrimerNombre > a.nominaElectronica.Trabajador.PrimerNombre) ? 1 : ((a.nominaElectronica.Trabajador.PrimerNombre > b.nominaElectronica.Trabajador.PrimerNombre) ? -1 : 0)); break;
			case "7": newNominas.sort((a,b) => (a.nominaElectronica.Trabajador.OtrosNombres > b.nominaElectronica.Trabajador.OtrosNombres) ? 1 : ((b.nominaElectronica.Trabajador.OtrosNombres > a.nominaElectronica.Trabajador.OtrosNombres) ? -1 : 0)); break;
			case "8": newNominas.sort((a,b) => (b.nominaElectronica.Trabajador.OtrosNombres > a.nominaElectronica.Trabajador.OtrosNombres) ? 1 : ((a.nominaElectronica.Trabajador.OtrosNombres > b.nominaElectronica.Trabajador.OtrosNombres) ? -1 : 0)); break;
			case "9": newNominas.sort((a,b) => (a.nominaElectronica.Trabajador.NumeroDocumento > b.nominaElectronica.Trabajador.NumeroDocumento) ? 1 : ((b.nominaElectronica.Trabajador.NumeroDocumento > a.nominaElectronica.Trabajador.NumeroDocumento) ? -1 : 0)); break;
			case "10": newNominas.sort((a,b) => (b.nominaElectronica.Trabajador.NumeroDocumento > a.nominaElectronica.Trabajador.NumeroDocumento) ? 1 : ((a.nominaElectronica.Trabajador.NumeroDocumento > b.nominaElectronica.Trabajador.NumeroDocumento) ? -1 : 0)); break;
			default: break;
		}
		setNominas(newNominas);
	}

	useEffect(() => {
		document.title = "Mi nómina";
		
		const newCheckedList: CheckboxItem[] = [];
		nominas.forEach(nomina => newCheckedList.push({
			document: nomina.nominaElectronica.Trabajador.NumeroDocumento,
			value: false
		}));
		setCheckedList(newCheckedList);
	}, [nominas]);	//Only executes if inside [""] object changes state
	
	return (!company.isReady) ? (
		<div className="spinner-container">
			<Spinner className="spinner" animation="border" role="status" />
		</div>
	) : (
		<div id="nomina">
			<header className="header-container">
				<div className="col-left">
					<h3>Mi nómina</h3>
				</div>
				<div className="col-right">
					<Link to="/nomina/actualizar_nomina_electronica" className="link">
						<Button variant="outline-success" className="btn"><BsFillPersonPlusFill /> NÓMINA ELECTRÓNICA</Button>
					</Link>
					<Link to="/nomina/actualizar_nomina_extra" className="link">
						<Button variant="success" className="btn"><BsPencil /> {(company.isCompletedNominaExtra) ? "EDITAR NÓMINA EXTRA": "COMPLETAR NÓMINA EXTRA"}</Button>
					</Link>
				</div>
			</header>
			<div className="body">
				<div className="table-header">
					<div className="options-container">
						<div className="seach-container">
							<FormControl
								type="search"
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								placeholder={`Buscar usuario en ${company.companyName}`}
								className="mr-2"
								aria-label="Search"
							/>
							<Button variant="outline-dark" onClick={() => handleSearch()}><BsSearch /></Button>
						</div>
						<div>
							<span>Ordenar por </span>
							<FormControl
                                    as="select"
                                    aria-label="Seleccionar el ordenamiento"
                                    custom={true}
                                    onChange={(e) => handleOrderBy(e.target.value)}
                                    className="mr-2"
									value={orderBy}
                                >
								<option value="-1" disabled={true}>Seleccione</option>
								<option value="1">Primer apellido A-Z</option>
								<option value="2">Primer apellido Z-A</option>
								<option value="3">Segundo apellido A-Z</option>
								<option value="4">Segundo apellido Z-A</option>
								<option value="5">Primer nombre A-Z</option>
								<option value="6">Primer nombre Z-A</option>
								<option value="7">Segundo nombre A-Z</option>
								<option value="8">Segundo nombre Z-A</option>
								<option value="9">Número de documento A-Z</option>
								<option value="10">Número de documento Z-A</option>
							</FormControl>
						</div>
					</div>
				</div>
				<hr className="line" />
				<div className="table-area">
					<div>
						{(nominas.length > 0) ? (
							<p className="text-content">Los registros que aparecen en la siguiente tabla son los datos adicionales (extra) de nómina con la que cuenta la empresa <i>{company.companyName}</i> actualmente, ten cuidado cuando los modifiques.</p>
						) : (null)}
						<div className="table-content">
							<NominaList
								nominas={nominas}
								setNominas={setNominas}
								inEditMode={inEditMode}
								email={email}
								setEmail={setEmail}
								position={position}
								setPosition={setPosition}
								area={area}
								setArea={setArea}
								dependents={dependents}
								setDependents={setDependents}
								positionLevel={positionLevel}
								setPositionLevel={setPositionLevel}
								seniority={seniority}
								setSeniority={setSeniority}
								experience={experience}
								setExperience={setExperience}
								academicBackground={academicBackground}
								setAcademicBackground={setAcademicBackground}
								checkedList={checkedList}
								setCheckedList={setCheckedList}
								onCancel={onCancel}
								onEdit={onEdit}
								onDelete={onDelete}
								onSave={onSave} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Nomina;
