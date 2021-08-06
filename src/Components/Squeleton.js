import { useContext, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//Components
import NavBar from './NavBar';
import SideBar from './SideBar';
import useWindowDimensions from '../Components/useWindowDimensions';
import { CompanyContext } from '../Providers/CompanyDataProvider';
//Screens
import Home from '../Screens/Home';
import Nomina from '../Screens/Nomina/Nomina';
import NuevaPosicion from '../Screens/Posicion/NuevaPosicion';
import NuevaPosicionDetalle from '../Screens/Posicion/NuevaPosicionDetalle';
import ActualizarNominaElectronica from '../Screens/Nomina/ActualizarNominaElectronica';
import ActualizarNominaExtra from '../Screens/Nomina/ActualizarNominaExtra';
//Styles
import '../Styles/Components/squeleton.css';
import 'react-toastify/dist/ReactToastify.css';

const Squeleton = () => {
	const { height } = useWindowDimensions();
	const { data: company } = useContext(CompanyContext);

	useEffect(() => {
		document.title = "Planeo Workforce"
	});

	return (
		<Router>
			<div className="squeleton-container" style={{height}}>
				<div id="navbarContainer" className="navbar-container">
					<NavBar title={company.companyName} />
				</div>
				<div className="above-container">
					<Switch>
						<Route exact path="/">
							<div className="sidebar-container">
							</div>
							<div className="page-container">
								<Home />
							</div>
						</Route>

						<Route exact path="/nomina">
							<div className="sidebar-container">
								<SideBar />
							</div>
							<div className="page-container">
								<Nomina />
							</div>
						</Route>
							<Route path="/nomina/actualizar_nomina_electronica">
								<div className="sidebar-container">
									<SideBar />
								</div>
								<div className="page-container">
									<ActualizarNominaElectronica />
								</div>
							</Route>
							<Route path="/nomina/actualizar_nomina_extra">
								<div className="sidebar-container">
									<SideBar />
								</div>
								<div className="page-container">
									<ActualizarNominaExtra />
								</div>
							</Route>

						<Route exact path="/nueva_posicion">
							<div className="sidebar-container">
								<SideBar />
							</div>
							<div className="page-container">
								<NuevaPosicion />
							</div>
						</Route>
							<Route path="/nueva_posicion/detalle/">
								<div className="sidebar-container">
									<SideBar />
								</div>
								<div className="page-container">
									<NuevaPosicionDetalle />
								</div>
							</Route>

						<Route path="/">
							<div className="sidebar-container">
								<SideBar />
							</div>
							<div className="page-container">
								<p>404: Not found</p>
							</div>
						</Route>
					</Switch>
					<ToastContainer position="top-right" autoClose={7000} />
				</div>
			</div>
		</Router>
	);
};
export default Squeleton;