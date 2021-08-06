import { createContext, useState, useEffect, Suspense } from 'react';
import "firebase/firestore";
import { useFirebaseApp, useUser } from "reactfire";
//Components
//Interfaces
import { ICompany, ICompanyInit } from "../Components/Company/ICompany";
import { INomina } from '../Components/Nomina/INomina';
import { createNominaElectronicaObject } from '../Components/NominaElectronica/NominaElectronicaHelpers';
import { createNominaExtraObject, ValidateExtraComplete } from '../Components/NominaExtra/NominaExtraHelpers';

interface IContextProps {
	data: ICompany,
	setData: Function,
	fetchCompanyData: Function
}
type Props = {
	children: JSX.Element
};
type INominaWithCompleted = {
	nomina: INomina;
	completed: boolean;
};
export const CompanyContext = createContext({} as IContextProps);

export const CompanyDataProvider = ({children}: Props) => {
    const [data, setData] = useState<ICompany>(ICompanyInit);
    const [fetchData, setFetchData] = useState<boolean>(true);
    const firebase = useFirebaseApp();
    const { data: user }  = useUser();

	const fetchCompanyData = async () => {
		/*Company admin user (user.displayName) containes the NIT*/
		if(user.displayName){
			const displayName: string = user.displayName;
			firebase.firestore().collection('companies').doc(displayName).get().then((snapshot) => {
				return snapshot.data();
			}).then(async (data) => {				
				const payrolDocsList = await firebase.firestore()
				.collection('company_payrolles')
				.doc(displayName)
				.collection("companyNominasUploaded").orderBy('uploadDate', 'desc').limit(1)
				.get();

				const companyPayrolDocsList: number[] = (payrolDocsList.docs[0]) ? JSON.parse(payrolDocsList.docs[0].data().jsonNominaNumDocs) : [];
				let companyObject: ICompany = ICompanyInit;
				if(data){
					companyObject = {
						adminUser:{
							name: data.adminUser.name,
							userUID: data.adminUser.userUID,
							email: data.adminUser.email,
						},
						companyAccept: data.companyAccept,
						companyCIIU: data.companyCIIU,
						companyCity: data.companyCity,
						companyName: data.companyName,
						companyNit: data.companyNit,
						companyNomina: [],
						companyPayrolDocsList: companyPayrolDocsList,
						companyPhone: data.companyPhone,
						companyVerDigit: data.companyVerDigit,
						isReady: false,
						isCompletedNominaExtra: false
					};
				}
				return companyObject;
			}).then(async (companyObject) => {
				const arrSnapshots = await Promise.all(companyObject.companyPayrolDocsList.map(async (nominaDoc) => {
					return await firebase.firestore().collection("payrolles").doc(nominaDoc.toString())
						.collection("nominasUploaded").orderBy('uploadDate', 'desc').limit(1).get();
				}));
				const arrExistents = arrSnapshots.filter(snapshot => snapshot.docs[0]);
				let isCompletedCompanyNominaExtra: boolean = true;

				const arrNominasWithCompleted: INominaWithCompleted[] = arrExistents.map((snapshot, i) => {
					const nomina: INomina = {
						nominaElectronica: createNominaElectronicaObject(snapshot.docs[0].data().nominaElectronica),
						nominaExtra: createNominaExtraObject(snapshot.docs[0].data().nominaExtra),
						uploadDate: snapshot.docs[0].data().uploadDate
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

				setData({
					...companyObject,
					companyNomina: arrNominas,
					isReady: true,
					isCompletedNominaExtra: (isCompletedCompanyNominaExtra && (arrNominas.length > 0))
				});
			}).catch((e) => {
				alert("Error al obtener información de la empresa: "+e);
				console.log(e);
			});
		}
	}

    useEffect(() => {
		//
    }, []);	//Entra solo cada vez que alguno de estos objetos cambie

	if(fetchData){
		setFetchData(false);
		fetchCompanyData();
	}

    return (
		<Suspense fallback={"Cargando información de la empresa..."}>
			<CompanyContext.Provider value={{
				data,
				setData,
				fetchCompanyData
			}}>
				{children}
			</CompanyContext.Provider>
		</Suspense>
    );
}
