export interface INominaExtra {
    academicBackground: string,
    area: string,
    dependents: boolean|null,
    email: string,
    experience: number|null,
    position: string,
    positionLevel: string,
    seniority: string
}

/*  Initialization of the "INominaExtra" object */
export const INominaExtraInit: INominaExtra = {
    academicBackground: "",
    area: "",
    dependents: null,
    email: "",
    experience: null,
    position: "",
    positionLevel: "",
    seniority: ""
}