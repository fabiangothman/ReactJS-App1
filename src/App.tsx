import React, { Suspense } from 'react';
import { useUser } from "reactfire";
import { Spinner } from 'react-bootstrap';
//Components
import Squeleton from './Components/Squeleton';
import { CompanyDataProvider } from "./Providers/CompanyDataProvider";	//TODO: Convertir a promesa y usar React.lazy para que funcione con Suspense
//Screens
import Welcome from './Screens/Welcome'
//Styles
import './Styles/app.css';

const App = () => {
	const { data: user }  = useUser();
		
	return (user===undefined) ? (
			<div className="spinner-container">
				<Spinner className="spinner" animation="border" role="status" />
			</div>
		) : (
			<Suspense fallback={"Buscando sesión existente..."}>
				<div className="App">
					{(user && user.emailVerified) ? (
						<Suspense fallback={"Cargando información de la empresa..."}>
							<CompanyDataProvider>
								<Squeleton />
							</CompanyDataProvider>
						</Suspense>
					) : (
						<Welcome />
					)}
				</div>
			</Suspense>
		);
}

export default App;
