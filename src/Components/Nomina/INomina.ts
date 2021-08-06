import { INominaElectronica, INominaElectronicaInit } from "../NominaElectronica/INominaElectronica";
import { INominaExtra, INominaExtraInit } from "../NominaExtra/INominaExtra";

export interface INomina {
    nominaElectronica: INominaElectronica,
    nominaExtra: INominaExtra,
    uploadDate: number
}

/*  Initialization of the "CompanyInit" object */
export const INominaInit: INomina = {
    nominaElectronica: INominaElectronicaInit,
    nominaExtra: INominaExtraInit,
    uploadDate: 0
}