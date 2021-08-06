import { ChangeEvent, FormEvent, useState } from 'react';
import { useContext, useEffect } from 'react';
import { FormControl, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";
//Components
import { CompanyContext } from '../../Providers/CompanyDataProvider';
import NominaElectronicaList from '../../Components/NominaElectronica/NominaElectronicaList';
import { getNominasElectronicasToUpload } from "../../Components/NominaElectronica/NominaElectronicaService";
//Interfaces
import { INominaElectronica } from "../../Components/NominaElectronica/INominaElectronica";
//Styles
import '../../Styles/Nomina/actualizarNominaElectronica.css';

const ActualizarNominaElectronica = () => {
	const { data: company, fetchCompanyData } = useContext(CompanyContext);
	const history = useHistory();
	const firebase = useFirebaseApp();

	const [filesSelected, setFilesSelected] = useState<FileList | null>(null);
	const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
	const [nominasToUpload, setNominasToUpload] = useState<INominaElectronica[]>([]);
	const [disablePreviewButton, setDisablePreviewButton] = useState<boolean>(true);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [disableReview, setDisableReview] = useState<boolean>(true);
	const [actionToDo, setActionToDo] = useState<string>("");

	const handleFilesSelected = async (e: ChangeEvent<HTMLInputElement>) => {		
		if(e.target.value){
			setFilesSelected(e.target.files);
			setDisablePreviewButton(false);
		}else{
			setFilesSelected(null);
			setDisablePreviewButton(true);
			setActionToDo("");
		}
		setNominasToUpload([]);
		setDisableReview(true);
	};
	
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

		setNominasToUpload([]);
		setIsPreviewing(true);
		const nominas = await getNominasElectronicasToUpload(filesSelected);
		
		if(nominas.length === 0){
			toast.error("Revisa nuevamente los archivos que seleccionaste, alguno de los archivos es incompatible, vuelve a seleccionar archivos con formato correcto.");
		}else{
			setNominasToUpload(nominas);
		}
		setDisablePreviewButton(true);
		setIsPreviewing(false);		
    }

	const handleUpload = async () => {
		setIsUploading(true);
		const clientTimestamp = + new Date();

		await Promise.all(nominasToUpload.map(async (nomina) => {
			const existingIndex: number = company.companyNomina.findIndex(obj => obj.nominaElectronica.Trabajador.NumeroDocumento===nomina.Trabajador.NumeroDocumento);

			await firebase.firestore().collection('payrolles')
			.doc(nomina.Trabajador.NumeroDocumento.toString())
			.collection("nominasUploaded")
			.doc(clientTimestamp.toString())
			.set({
				nominaElectronica: {
					CodigoQR: nomina.CodigoQR,
					ComprobanteTotal: nomina.ComprobanteTotal,
					Deducciones: nomina.Deducciones,
					DeduccionesTotal: nomina.DeduccionesTotal,
					Devengados: nomina.Devengados,
					DevengadosTotal: nomina.DevengadosTotal,
					Empleador: nomina.Empleador,
					FechasPagos: nomina.FechasPagos,
					InformacionGeneral: nomina.InformacionGeneral,
					LugarGeneracionXML: nomina.LugarGeneracionXML,
					Notas: nomina.Notas,
					Novedad: nomina.Novedad,
					NumeroSecuenciaXML: nomina.NumeroSecuenciaXML,
					Pago: nomina.Pago,
					Periodo: nomina.Periodo,
					ProveedorXML: nomina.ProveedorXML,
					Redondeo: nomina.Redondeo,
					Trabajador: nomina.Trabajador
				},
				nominaExtra: {
					academicBackground: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.academicBackground : "",
					area: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.area : "",
					email: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.email : "",
					experience: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.experience : null,
					position: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.position : "",
					positionLevel: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.positionLevel : "",
					dependents: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.dependents : null,
					seniority: (company.companyNomina[existingIndex]) ? company.companyNomina[existingIndex].nominaExtra.seniority : ""
				},
				uploadDate: clientTimestamp
			});
			return nomina.Trabajador.NumeroDocumento;
		})).then(async (arrDocs: number[]) => {
			let nomArrDocsAcum: number[] = [];
			if(actionToDo==="keep_olders"){
				nomArrDocsAcum = company.companyPayrolDocsList.concat(arrDocs).sort((a, b) => a - b);
			}else if(actionToDo==="delete_olders"){
				nomArrDocsAcum = arrDocs.sort((a, b) => a - b);
			}
			//Order array in ASC
			nomArrDocsAcum = Array.from(new Set(nomArrDocsAcum));

			await firebase.firestore().collection('company_payrolles')
			.doc(company.companyNit.toString())
			.collection("companyNominasUploaded")
			.doc(clientTimestamp.toString())
			.set({
				uploadDate: clientTimestamp,
				jsonNominaNumDocs: JSON.stringify(nomArrDocsAcum)
			});
			toast.success("Nueva nómina cargada con éxito, ahora puedes 'Visualizar nómina'.");
			fetchCompanyData();
			setNominasToUpload([]);
			setDisableReview(false);
		}).catch(e => {
			console.log(e);
			toast.error(`Ocurrió un error ${e}`);
		});

		setIsUploading(false);		
    }

	const handleReview = () => {
		history.push("/nomina/");
	}

  	useEffect(() => {
		document.title = "Actualizar nómina electrónica";
	});

	//console.log(nominasToUpload);
	
	return (!company.isReady) ? (
		<div className="spinner-container">
			<Spinner className="spinner" animation="border" role="status" />
		</div>
	) : (
		<div id="actualizar_nomina_electronica">
			<header className="header-container">
				<h3>Actualizar nómina electrónica</h3>
			</header>
			<div className="body">
				<div className="description-container">
					<span>Selecciona el/los documento/s XML (.xml) de tu nómina de <i>{company.companyName}</i> a cargar y presiona sobre <i>"Previsualizar"</i> para continuar.</span>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<FormControl
							type="file"
							multiple={true}
							accept=".xml"
							className="mr-2"
							onChange={handleFilesSelected}
						/>
					</div>
					<div className="options-container">
						<p>Ahora bien, por favor selecciona del siguiente listado lo que quieres hacer con la nómina que estas a punto de cargar: </p>
						<FormControl
								as="select"
								aria-label="Seleccionar la acción"
								onChange={(e) => setActionToDo(e.target.value)}
								className="mr-2 w-auto"
								value={actionToDo}
							>
							<option value="" disabled={true}>Seleccione</option>
							<option value="keep_olders">Cargar nuevos y mezclar con existentes</option>
							<option value="delete_olders">Cargar solo nuevos y eliminar existentes</option>
						</FormControl>
					</div>
					<div className="preview-container">
						<Button variant="info"
							className="btn"
							type="submit"
							disabled={(!disablePreviewButton && actionToDo!=="") ? false : true}
							>
							{(isPreviewing) ? (
								<Spinner className="spinner" animation="border" role="status" />
							) : ("Previsualizar")}
						</Button>
					</div>
				</form>
				<hr className="line" />
				<div className="table-area">
					{(nominasToUpload.length > 0) ? (
						<div>
							<p className="text-content">Por favor revisa cuidadosamente la información que se muestra a continuación, una vez verifiques que se encuentre correcta, ve al botón de <i>"Cargar Nómina"</i> que se encuentra en la parte inferior de la página.</p>
							<div className="table-content">
								<NominaElectronicaList nominasToUpload={nominasToUpload} />
							</div>
						</div>
					) : (null)}
				</div>
				<hr className="line" />
				<div className="upload-container">
					<Button variant="success"
						className="btn mx-2"
						disabled={(nominasToUpload.length === 0)}
						onClick={() => handleUpload()}
						>
						{(isUploading) ? (
							<Spinner className="spinner" animation="border" role="status" />
						) : ("Cargar nómina")}
					</Button>
					<Button variant="warning"
						className="btn mx-2"
						disabled={disableReview}
						onClick={() => handleReview()}
						>
						Visualizar nómina
					</Button>
				</div>
			</div>
		</div>
	);
}
export default ActualizarNominaElectronica;
