import { INominaExtra, INominaExtraInit } from "./INominaExtra";

export const createNominaExtraObject = (nomina: any): INominaExtra => {
    if(nomina){
        return {
            academicBackground: tryAssignString(nomina.academicBackground),
            area: tryAssignString(nomina.area),
            dependents: tryAssignBoolean(nomina.dependents),
            email: tryAssignString(nomina.email),
            experience: tryAssignNumber(nomina.experience),
            position: tryAssignString(nomina.position),
            positionLevel: tryAssignString(nomina.positionLevel),
            seniority: tryAssignString(nomina.seniority)
        }
    }else{
        return INominaExtraInit;
    }
}

export const ValidateExtraComplete = (nomina: INominaExtra): boolean => {
    if(nomina.academicBackground==="") return false;
    else if(nomina.area==="") return false;
    else if(nomina.dependents===null) return false;
    else if(nomina.email==="") return false;
    else if(nomina.experience===null) return false;
    else if(nomina.position==="") return false;
    else if(nomina.positionLevel==="") return false;
    else if(nomina.seniority==="") return false;
    else return true;
    
}

const tryAssignNumber = (value: string|undefined): number|null => (value===undefined || value===null) ? null : +(value);
const tryAssignString = (value: string|undefined): string => (value === undefined) ? "" : value;
//const tryAssignDate = (value: string|undefined): Date => (value === undefined) ? new Date() : new Date(value);
const tryAssignBoolean = (value: string|undefined): boolean|null => (value===undefined || value===null) ? null : (value.toString() === "true");