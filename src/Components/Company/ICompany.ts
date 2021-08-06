import { INomina } from "../Nomina/INomina";

export interface ICompany {
    adminUser: {
        name: string,
        userUID: string,
        email: string
    },
    companyAccept: boolean,
    companyCIIU: 0,
    companyCity: string,
    companyName: string,
    companyNit: number,
    companyNomina: INomina[],
    companyPayrolDocsList: number[],
    companyPhone: number,
    companyVerDigit: number,
    isReady: boolean,
    isCompletedNominaExtra: boolean
}

/*  Initialization of the "CompanyInit" object */
export const ICompanyInit: ICompany = {
    adminUser: {
        name: "",
        userUID: "",
        email: ""
    },
    companyAccept: false,
    companyCIIU: 0,
    companyCity: "",
    companyName: "",
    companyNit: 0,
    companyNomina: [],
    companyPayrolDocsList: [],
    companyPhone: 0,
    companyVerDigit: 0,
    isReady: false,
    isCompletedNominaExtra: false
}