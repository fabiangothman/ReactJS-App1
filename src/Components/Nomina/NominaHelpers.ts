//Libraries
import { toast } from 'react-toastify';

export const nominaAccessMessage = (isCompletedNominaExtra: boolean) => {
    if(!isCompletedNominaExtra){
        toast.error(`Necesitas completar primero la información extra para poder acceder a esta característica. Ve a 'Mi nómina' para completarla.`);
    }
}