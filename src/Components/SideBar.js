//Libraries
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
//Components
import { CompanyContext } from '../Providers/CompanyDataProvider';
import { nominaAccessMessage } from './Nomina/NominaHelpers';
//Styles
import '../Styles/Components/sidebar.css';

const SideBar = () => {
	const { data: company } = useContext(CompanyContext);

	return (
		<div id="sidebar">
			<div className="sidebar-item" onClick={() => {}}>
				<Nav.Link as={Link} to="/nomina"
					className="link"
					disabled={false}
				>Mi nómina</Nav.Link>
			</div>
			<div className={`sidebar-item ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`} onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
				<Nav.Link as={Link} to="/nueva_posicion"
					className="link"
					disabled={!company.isCompletedNominaExtra}
				>Nueva posición</Nav.Link>
			</div>
			<div className={`sidebar-item ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`} onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
				<Nav.Link as={Link} to="/analisis_mercado"
					className="link"
					disabled={!company.isCompletedNominaExtra}
				>Análisis de mercado</Nav.Link>
			</div>
			<div className={`sidebar-item ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`} onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
				<Nav.Link as={Link} to="/config_documentos"
					className="link"
					disabled={!company.isCompletedNominaExtra}
				>Config Documentos</Nav.Link>
			</div>
			<div className={`sidebar-item ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`} onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
				<Nav.Link as={Link} to="/adelanto_nomina"
					className="link"
					disabled={!company.isCompletedNominaExtra}
				>Adelanto de nómina</Nav.Link>
			</div>
			<div className="sidebar-item" onClick={() => {}}>
				<Nav.Link as={Link} to="/config_cuenta"
					className="link"
					disabled={false}
				>Config de la cuenta</Nav.Link>
			</div>
		</div>
	);
};
export default SideBar;