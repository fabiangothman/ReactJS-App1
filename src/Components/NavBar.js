import {
	Navbar,
	Container,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
//Styles
import LogoBlack from "../Media/logo_black.png";
const NavBar = (porps) => {
	const firebase = useFirebaseApp();

	const signOut = async () => {
        await firebase.auth().signOut();
    }

	return (
		<Navbar bg="white" variant="light" expand="lg" style={{borderBottom: '1px solid gray', }}>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={LogoBlack} height={35} alt="Planeo logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{/*<Nav.Link as={Link} to="/nomina_electronica" >Mi nómina electrónica</Nav.Link>
						<Nav.Link as={Link} to="/nueva_posicion" >Nueva posición</Nav.Link>
						<NavDropdown title="Mareigua SAS" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">Perfil</NavDropdown.Item>
							<NavDropdown.Item href="#">Configuración</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#">Cerrar sesión</NavDropdown.Item>
						</NavDropdown>*/}
					</Nav>
					<NavDropdown title={porps.title} >
						<NavDropdown.Item href="#">Perfil</NavDropdown.Item>
						<NavDropdown.Item href="#">Configuración</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#" onClick={signOut}>Cerrar sesión</NavDropdown.Item>
					</NavDropdown>
				</Navbar.Collapse>				
			</Container>
		</Navbar>
	);
};
export default NavBar;