//Libraries
import { Link } from "react-router-dom";
//Components

const NoAccessMessage = () => {
	
	return (
		<div className="">
			<p>Necesitas completar primero la información extra para poder acceder a esta característica. Puedes completarla <Link to="/nomina/" className="link">haciendo click aquí</Link>.</p>
		</div>
	);
}
export default NoAccessMessage;
