//Libraries
import { useContext, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//Components
import { CompanyContext } from '../Providers/CompanyDataProvider';
import { nominaAccessMessage } from '../Components/Nomina/NominaHelpers';
//Styles
import '../Styles/home.css'

const Home = () => {
	const { data: company } = useContext(CompanyContext);

	useEffect(() => {
		document.title = "Home"
	});
	
	return (
		<div id="home-container">
			<div className="header">
				<h2>Bienvenido {company.adminUser.name}</h2>
				<p>Gracias por elegir los servicios de <strong>Planeo</strong>, se ha registrado correctamente en <strong>Planeo WorkForce</strong>.</p>
				<p>Aquí puede hacer  la búsqueda de un nuevo perfil, actualizar y editar su nómina, configurar la cuenta, personalizar los documentos empresariales y hacer una comparación salarial y de benéficos frente al mercado, entre otros.</p>
			</div>
			<div className="cards-container">
				<div className="card" onClick={() => {}}>
					<Nav.Link as={Link} to="/nomina"
						className="cols-container link-container"
						disabled={false}
					>
						<div className="col col-left bg-yellow text-black">
							<span>Mi nómina</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
				<div className={`card ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`} onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
					<Nav.Link as={Link} to="/nueva_posicion"
						className="cols-container link-container"
						disabled={!company.isCompletedNominaExtra}
					>
						<div className="col col-left bg-blue text-white">
							<span>Nueva posición</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
				<div className={`card ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`}  onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
					<Nav.Link as={Link} to="/analisis_mercado"
						className="cols-container link-container"
						disabled={!company.isCompletedNominaExtra}
					>
						<div className="col col-left bg-black text-white">
							<span>Análisis de mercado</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
				<div className={`card ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`}  onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
					<Nav.Link as={Link} to="/config_documentos"
						className="cols-container link-container"
						disabled={!company.isCompletedNominaExtra}
					>
						<div className="col col-left bg-grey text-white">
							<span>Config Documentos</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
				<div className={`card ${(company.isCompletedNominaExtra) ? "" : "access-disabled"}`}  onClick={() => nominaAccessMessage(company.isCompletedNominaExtra)}>
					<Nav.Link as={Link} to="/adelanto_nomina"
						className="cols-container link-container"
						disabled={!company.isCompletedNominaExtra}
					>
						<div className="col col-left bg-green text-white">
							<span>Adelanto de nómina</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
				<div className="card"  onClick={() => {}}>
					<Nav.Link as={Link} to="/config_cuenta"
						className="cols-container link-container"
						disabled={false}
					>
						<div className="col col-left bg-greengray text-white">
							<span>Config de la cuenta</span>
						</div>
						<div className="col col-right">
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien felis, tristique a sagittis.</span>
						</div>
					</Nav.Link>
				</div>
			</div>
		</div>
  	);
}
export default Home;
