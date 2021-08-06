//Libraries
import axios from "axios";
import xml2js from "xml2js";
//Components
import { INominaElectronica } from "./INominaElectronica";
import { createNominaElectronicaObjectFromXML } from "./NominaElectronicaHelpers";

export const getNominasElectronicasToUpload = async (filesSelected: FileList | null) => {
    const filesToArray = Array.prototype.slice.call(filesSelected);
    
    const arrayData = await Promise.all(filesToArray.map((file) => {
        const tmppath = URL.createObjectURL(file);
        return axios.get(tmppath);
    })).then((files) => {
        return files.map(file => file.data);
    });  

    return await Promise.all(arrayData.map((data) => {
        const parser = new xml2js.Parser({
            attrkey: "data",
            trim: true
        });
        return parser.parseStringPromise(data);
    })).then((arrDataJson): INominaElectronica[] => arrDataJson.map(nomina => createNominaElectronicaObjectFromXML(nomina))).catch(() => []);
}