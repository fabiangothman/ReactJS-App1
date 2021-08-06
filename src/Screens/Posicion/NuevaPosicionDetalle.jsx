
import { useContext, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import NoAccessMessage from '../../Components/NoAccessMessage';
//Components
import { CompanyContext } from '../../Providers/CompanyDataProvider';
//Styless
import '../../Styles/Posicion/nuevaPosicionDetalle.css';

const NuevaPosicionDetalle = () => {
	const { data: company } = useContext(CompanyContext);

  	useEffect(() => {
		document.title = "Detalle de posición";
	});
	
	return (!company.isReady) ? (
		<div className="spinner-container">
			<Spinner className="spinner" animation="border" role="status" />
		</div>
	) : (
		<div id="nueva_posicion_detalle">
			<header className="header-container">
				<h3>Nueva posición</h3>
			</header>
			<div className="body">
				{(!company.isCompletedNominaExtra) ? (
					<NoAccessMessage />
				) : (
					<>
						<p>Detalle de nueva posición para {company.companyName}</p>
					</>
				)}
			</div>
		</div>
	);
}
export default NuevaPosicionDetalle;
