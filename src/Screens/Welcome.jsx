//Libraries
import { useEffect, useState } from "react";
import { Button, Modal, Spinner } from 'react-bootstrap';
import "firebase/auth";
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";
//Components
import { terminosYCondiciones, tratamientoDatosPersonales } from "../Components/Policy";
//Images
import BgImage from '../Media/welcome/bg_image.png';
import LogoWhite from '../Media/logo_white.png';
import LogoBlack from '../Media/logo_black.png';
import Certifications from '../Media/welcome/certifications.png';
import Icon_Salary from '../Media/welcome/icon_money.png';
import Icon_Rota from '../Media/welcome/icon_people.png';
import Icon_Cert from '../Media/welcome/icon_assistant.png';
import Icon_Sign from '../Media/welcome/icon_create.png';
import Icon_Win from '../Media/welcome/icon_win.png';
import Icon_Surf from '../Media/welcome/icon_surf.png';
import Icon_Phoenix from '../Media/welcome/icon_phoenix.png';
//Styles
import '../Styles/welcome.css';
import '../Styles/app.css';

const Welcome = (porps) => {
	const [registroExitosoAlert, setRegistroExitosoAlert] = useState(false);

	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRecoveryModal, setShowRecoveryModal] = useState(false);
	const [showTyCModal, setShowTyCModal] = useState(false);
	const [showTratamientoModal, setShowTratamientoModal] = useState(false);
	const [rightColWidth, setRightColWidth] = useState(0);

	const [isLogining, setIsLogining] = useState(false);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [isRecovering, setIsRecovering] = useState(false);
	const [recoveryEmail, setRecoveryEmail] = useState("");

	const [isRegistering, setIsRegistering] = useState(false);
	const [companyName, setCompanyName] = useState("");
	const [companyNit, setCompanyNit] = useState("");
	const [companyVerDigit, setCompanyVerDigit] = useState("");
	const [companyEmail, setCompanyEmail] = useState("");
	const [companyPhone, setCompanyPhone] = useState("");
	const [companyCity, setCompanyCity] = useState("Bogotá");
	const [companyCIIU, setCompanyCIIU] = useState("");
	const [companyPassword, setCompanyPassword] = useState("");
	const [companyPasswordConfirm, setCompanyPasswordConfirm] = useState("");
	const [companyAccept, setCompanyAccept] = useState(true);

	const firebase = useFirebaseApp();

	const companyExistsByNit = async (nit) => {
        let num = 0;
        await firebase.firestore().collection('companies')
            .where('companyNit', '==', `${nit}`).get().then((snapshot) => {
                num = snapshot.size;
            }).catch(error => {
                console.log(error);
                alert(error);
            });
        return num;
    }
	const companyExistsByEmail = async (email) => {
        let num = 0;
        await firebase.firestore().collection('companies')
            .where('companyEmail', '==', email).get().then((snapshot) => {
				num = snapshot.size;
            }).catch(error => {
                console.log(error);
                alert(error);
            });
        return num;
    }

	const handleRegister = async (e) => {
		e.preventDefault();
		if(companyPassword===companyPasswordConfirm){
			setIsRegistering(true);
			if((await companyExistsByNit(companyNit) > 0) || (await companyExistsByEmail(companyEmail) > 0)){
				alert(`Ocurrió un error: El Nit o el correo ingresados ya se encuentran en uso, intente iniciar sesión a cambio.`);
				setIsRegistering(false);
			}else{
				const resp = await firebase.auth().createUserWithEmailAndPassword(companyEmail, companyPassword).catch(e => {
					setIsRegistering(false);
					alert("Ocurrió un error: "+e);
				});
				if(resp){
					const currUser = firebase.auth().currentUser;
					await currUser.updateProfile({displayName: companyNit});
					await firebase.firestore().collection('companies').doc(companyNit).set({
						companyName,
						companyNit: parseInt(companyNit),
						companyVerDigit: parseInt(companyVerDigit),
						companyPhone: parseInt(companyPhone),
						companyCity,
						companyCIIU: parseInt(companyCIIU),
						companyAccept,
						adminUser:{
							name: "Admin",
							userUID: resp.user.uid,
							email: companyEmail
						}
					}).catch(e => {
						console.log(e);
						alert("Ocurrió un error: "+e);
					});
					await currUser.sendEmailVerification();
					firebase.auth().signOut().then(() => {
						setRegistroExitosoAlert(true);
						setCompanyName("");
						setCompanyNit("");
						setCompanyVerDigit("");
						setCompanyEmail("");
						setCompanyPhone("");
						setCompanyCIIU("");
						setCompanyPassword("");
						setCompanyPasswordConfirm("");
						setIsRegistering(false);
					});
				}
			}
		}else{
			alert("Las contraseñas no coinciden, verifica la información e intenta nuevamente.");
		}
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		setIsLogining(true);
		const resp = await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(e => {
			alert("Ocurrió un error: "+e);
			setIsLogining(false);
		});
		if(resp){
			if(!resp.user.emailVerified){
				alert("Aún no has validado tu correo electrónico, se envió un email de cofirmación cuando te registraste.");
				firebase.auth().signOut();
				setIsLogining(false);
			}
		}

	}

	const handleRecovery = async (e) => {
		e.preventDefault();
		setIsRecovering(true);
		await firebase.auth().sendPasswordResetEmail(recoveryEmail).then(() => {
			alert("Listo! Revisa tu correo electrónico, no olvides revisar tu bandeja de spam.");
		}).catch(e => {
			console.log(e);
			alert("Ocurrió un error: "+e);
		});
		setIsRecovering(false);

	}

	useEffect(() => {
		setRightColWidth(document.getElementById("col-right").clientWidth);
	}, []);

	return (
		<>
			<div id="welcomeContainer" style={{backgroundImage:`url(${BgImage})`}}>
				<div className="header-container">
					<div className="logo-container">
						<img src={LogoWhite} alt="Planeo logo" />
					</div>
					<div className="menu-container">
						<nav className="menu-items">
							<div className="item"><a href="#description">Inicio</a></div>
							<div className="item"><a href="#features">Funcionalidades</a></div>
							<div className="item"><a href="#benefits">Beneficios</a></div>
							<div className="item"><a href="#contact">Contáctanos</a></div>
							<div className="item"><Button variant="outline-primary" style={{border:'1px solid white', color:'white' }} onClick={() => setShowLoginModal(true)} >INICIAR SESIÓN</Button></div>
						</nav>
					</div>
				</div>
				<div className="body-container">
					<div className="boxes-container">
						<div id="description" className="box-container description-box">
							<div className="col col-left">
								<p className="title-text">Planeo WorkForce</p>
								<p className="description-text">Planeo Workforce es una plataforma web enfocada en el análisis de información empresarial para la toma de decisiones. Por medio de la información de nómina cargada en nuestro sistema haremos un análisis de su rotación de personal y escala salarial, para mejorar e impulsar su empresa tomando decisiones acertadas e informadas.</p>
								<div className="spacer-vertical-20"></div>
								<p className="description-text">Nuestro respaldo:</p>
								<img src={Certifications} alt="Planeo certifications logos" />
							</div>
							<div id="col-right" className="col col-right"></div>
						</div>

						<div id="features" className="box-container features-box">
							<div className="col col-left">
								<p className="title-text">Funcionalidades</p>
								<p className="description-text">Planeo Workforce te ofrece diferentes soluciones que te ayudaran a tomar mejores decisiones.</p>
								<div className="spacer-vertical-20"></div>
								<div className="cards-container">
									<div className="card">
										<img src={Icon_Salary} alt="money icon" />
										<p className="card-title">Salario Promedio</p>
										<p className="card-text">Conoce el salario promedio de tu empresa y compáralo con el mercado</p>
									</div>
									<div className="card">
										<img src={Icon_Rota} alt="rotation icon" />
										<p className="card-title">Rotación</p>
										<p className="card-text">Compara el índice de rotación de personal de tu empresa con el mercado y conoce cual es tu ranking</p>
									</div>
								</div>
								<div className="cards-container">
									<div className="card">
										<img src={Icon_Cert} alt="certificate icon" />
										<p className="card-title">Certificados</p>
										<p className="card-text">Configura la información y datos de contacto del certificado laboral que recibirán tus empleados</p>
									</div>
									<div className="card">
										<img src={Icon_Sign} alt="signature icon" />
										<p className="card-title">Firma Virtual</p>
										<p className="card-text">Carga la firma virtual y agiliza el proceso de creación de certificados laborales en tu empresa</p>
									</div>
								</div>
							</div>
							<div className="col col-right"></div>
						</div>

						<div id="benefits" className="box-container benefits-box">
							<div className="col col-left">
								<p className="title-text">Algunos beneficios</p>
								<div className="spacer-vertical-20"></div>
								<div className="benefit-card">
									<div className="benefit-icon">
										<img src={Icon_Win} alt="window icon" width="32" />
									</div>
									<div className="benefit-text">
										<p className="description-text">Consigue de forma constante un análisis de escala salarial y rotación de empleados en comparación con el mercado.</p>
									</div>
								</div>
								<div className="benefit-card">
									<div className="benefit-icon">
										<img src={Icon_Surf} alt="surf icon" width="32" />
									</div>
									<div className="benefit-text">
										<p className="description-text">Mejora la retención de colaboradores de tu empresa y quédate con el talento que deseas.</p>
									</div>
								</div>
								<div className="benefit-card">
									<div className="benefit-icon">
										<img src={Icon_Phoenix} alt="phoenix icon" width="32" />
									</div>
									<div className="benefit-text">
										<p className="description-text">Agiliza el proceso de certificados laborales y facilita el proceso para tus colaboradores.</p>
									</div>
								</div>
							</div>
							<div className="col col-right"></div>
						</div>
						
						<div id="contact" className="box-container contact-box">
							<div className="col col-left">
								<p className="title-text">Contáctanos</p>
								<p className="description-text">Si quieres conocer más de Planeo Workfroce, contáctanos y subscribete para aprender sobre las nuevas funcionalidades que Planeo Workforce tendrá para ti.</p>
								<div className="spacer-vertical-20"></div>
								<div className="input">
									<input type="text" placeholder="Correo elecrónico *" />
								</div>
								<Button variant="outline-primary" style={{border:'1px solid #343BA7', color:'#343BA7', cursor:'pointer' }} >SUSCRIBIRME</Button>
							</div>
							<div className="col col-right"></div>
						</div>

					</div>
				</div>
				<div className="footer-container">
					<div className="col">
						<img src={LogoBlack} alt="logo planeo" />
					</div>
					<div className="col">
						<img src={Certifications} alt="logo planeo" />
					</div>
					<div className="col">
						<span>Laboratorio de innovación digital</span>
					</div>
				</div>

				<div id="register" className="register-box" style={{width: rightColWidth}}>
					<div className="content-container">
						<div className="content">
							<span className="title">Registra tu empresa</span>
							<p className="description">Realiza el registro de tu empresa para poder aprovechar las funcionalidades que Planeo Workforce trae para ti.</p>
							<form className="register-form" action="" onSubmit={handleRegister}>
								<input type="text" placeholder="Nombre de la empresa *" minLength="5" required={true} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
								<input type="number" placeholder="NIT de la empresa *" min="10000000" max="999999999999999" required={true} value={companyNit} onChange={(e) => setCompanyNit(e.target.value)} />
								<input type="number" placeholder="Dígito de verificación de NIT *" min="0" max="9" required={true} value={companyVerDigit} onChange={(e) => setCompanyVerDigit(e.target.value)} />
								<input type="number" placeholder="CIIU de la empresa *" min="0" max="999" required={true} value={companyCIIU} onChange={(e) => setCompanyCIIU(e.target.value)} />
								<input type="number" placeholder="Teléfono de contacto *" min="1000000" max="9999999999" required={true} value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} />
								<label>Ciudad</label>
								<select required={true} value={companyCity} onChange={(e) => setCompanyCity(e.target.value)}>
									<option>Bogotá</option>
									<option>Cali</option>
									<option>Medellín</option>
									<option>Armenia</option>
								</select>
								<input type="email" placeholder="Correo electrónico empresarial *" minLength="5" required={true} value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
								<div className="spacer-vertical-20"></div>
								<label>Contraseña</label>
								<input type="password" placeholder="Contraseña *" minLength="6" required={true} value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} />
								<label>Crea una contraseña segura de 8 caracteres como mínimo, con combinación entre mayúsculas, minúsculas y números</label>
								<input type="password" placeholder="Confirmar contraseña *" minLength="6" required={true} value={companyPasswordConfirm} onChange={(e) => setCompanyPasswordConfirm(e.target.value)} />
								<div className="checkbox-container">
									<input type="checkbox" checked={companyAccept} onChange={(e) => setCompanyAccept(e.target.checked)} required={true} />
									<p className="tyc-text">Acepto <span className="hipervinculo" onClick={() => setShowTyCModal(true)}>términos y condiciones</span> y autorizo el <span className="hipervinculo" onClick={() => setShowTratamientoModal(true)}>tratamiento de datos personales</span>.</p>
								</div>

								{(!isRegistering) ? (
									<input type="submit" value="REGISTRARSE" />
								):(
									<div style={{display:'flex', }}>
										<Spinner style={{margin:'0px auto', }} animation="border" role="status" />
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
			<Modal show={registroExitosoAlert} onHide={() => setRegistroExitosoAlert(false)}>
				<Modal.Header closeButton={false} >
				<Modal.Title>Registro exitoso!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Antes de iniciar sesión, recuerda validar primero tu correo electrónico mediante el email que hemos enviado.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setRegistroExitosoAlert(false)}>Cerrar</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
				<Modal.Header closeButton={true} closeLabel="Cerrar" >
				<Modal.Title>Iniciar sesión</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="login-form" action="" onSubmit={handleLogin}>
						<input type="email" placeholder="Correo electrónico empresarial *" minLength="5" required={true} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
						<input type="password" placeholder="Contraseña *" minLength="6" required={true} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
						
						<p className="hipervinculo" style={{margin:'20px 0px',}} onClick={() => {
							setShowLoginModal(false);
							setShowRecoveryModal(true);
						}}>¿Olvidaste tu contraseña?</p>

						{(!isLogining) ? (
							<input type="submit" value="INGRESAR" />
						):(
							<div style={{display:'flex', }}>
								<Spinner style={{margin:'0px auto', }} animation="border" role="status" />
							</div>
						)}
					</form>
				</Modal.Body>
			</Modal>

			<Modal show={showRecoveryModal} onHide={() => setShowRecoveryModal(false)}>
				<Modal.Header closeButton={true} closeLabel="Cerrar" >
				<Modal.Title>¿Olvidaste tu contraseña?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="login-form" action="" onSubmit={handleRecovery}>
						<label>Puedes restaurar tu contraseña, solamente debes ingresar tu correo electrónico y validar el cambio.</label>
						<input type="email" placeholder="Correo electrónico empresarial *" minLength="5" required={true} value={recoveryEmail} onChange={(e) => setRecoveryEmail(e.target.value)} />
						<div className="spacer-vertical-20"></div>
						{(!isRecovering) ? (
							<input type="submit" value="RECUPERAR" />
						):(
							<div style={{display:'flex', }}>
								<Spinner style={{margin:'0px auto', }} animation="border" role="status" />
							</div>
						)}
					</form>
				</Modal.Body>
			</Modal>

			<Modal show={showTyCModal} onHide={() => setShowTyCModal(false)}>
				<Modal.Header closeButton={true} closeLabel="Cerrar" >
				<Modal.Title>Términos y condiciones</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{terminosYCondiciones}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setShowTyCModal(false)}>Cerrar</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showTratamientoModal} onHide={() => setShowTratamientoModal(false)}>
				<Modal.Header closeButton={true} closeLabel="Cerrar" >
				<Modal.Title>Tratamiento de datos personales</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{tratamientoDatosPersonales}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => setShowTratamientoModal(false)}>Cerrar</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default Welcome;