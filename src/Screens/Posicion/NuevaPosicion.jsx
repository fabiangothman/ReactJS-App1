import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from "react-router-dom";
//Components
import { CompanyContext } from '../../Providers/CompanyDataProvider';
//Styles
import '../../Styles/Posicion/nuevaPosicion.css';
import NoAccessMessage from '../../Components/NoAccessMessage';

const NuevaPosicion = () => {
	const { data: company } = useContext(CompanyContext);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showNewPosition, setShowNewPosition] = useState(false);
	const [newPosition, setNewPosition] = useState("");
	const [isProcessing, setIsProcessing] = useState("");

	const options = [
		{ value: 'director_contable', label: 'Director contable' },
		{ value: 'director_comercial', label: 'Director comercial' },
		{ value: 'director_compras', label: 'Director de compras' },
	];

	const handleSearch = () => {
		setSelectedOption(null);
	}

	const handleSendNewPosition = e => {
		e.preventDefault();
		setIsProcessing(true);
		setIsProcessing(false);
	}

  	useEffect(() => {
		document.title = "Nueva posición";
	});
	
	return (!company.isReady) ? (
		<div className="spinner-container">
			<Spinner className="spinner" animation="border" role="status" />
		</div>
	) : (
		<>
		<div id="nueva_posicion">
			<header className="header-container">
				<h3>Nueva posición</h3>
			</header>
			<div className="body">
				{(!company.isCompletedNominaExtra) ? (
					<NoAccessMessage />
				) : (
					<>
						<div className="description-container">
							<span>Selecciona la nueva posición para <i>{company.companyName}</i> que le gustaría analizar.</span>
						</div>
						<div className="input-container">
						<Select
							defaultValue={selectedOption}
							onChange={setSelectedOption}
							options={options}
							placeholder="Selecciona la posición que buscas"
						/>
						<p className="hipervinculo" style={{margin:'10px 0px',}} onClick={() => setShowNewPosition(true)}>¿No encuentras la posición que buscas?</p>
						</div>
						<div className="button-container">
							<Button variant="success" className="btn"
								disabled={!(selectedOption)}
								onClick={handleSearch}>
								<Link to={(selectedOption) ? `/nueva_posicion/detalle/${selectedOption.value}/` : "#"} className="link" >Buscar</Link>
							</Button>
						</div>
					</>
				)}
			</div>
		</div>

		<Modal show={showNewPosition} onHide={() => setShowNewPosition(false)}>
			<Modal.Header closeButton={true} closeLabel="" >
			<Modal.Title>¿No encuentras la posición que buscas?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form className="posicion-form" action="" onSubmit={handleSendNewPosition}>
					<label>Puedes enviarnos un mensaje con la posición que buscas y la agregaremos por ti.</label>
					<input type="text" placeholder="Nueva posición *" minLength="3" required={true} value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
					<div className="spacer-vertical-10"></div>
					{(!isProcessing) ? (
						<input type="submit" value="ENVIAR" />
					):(
						<div style={{display:'flex', }}>
							<Spinner style={{margin:'0px auto', }} animation="border" role="status" />
						</div>
					)}
				</form>
			</Modal.Body>
		</Modal>
		</>
	);
}
export default NuevaPosicion;
