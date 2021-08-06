//Components
import { useState } from 'react';
import { Button, FormCheck, FormControl, Spinner, Table } from 'react-bootstrap';
import { BsCheck, BsX, /*BsPencilSquare,*/ BsTrash } from "react-icons/bs";	//https://react-icons.github.io/react-icons/icons?name=bs
//Interfaces
import { INomina } from "../Nomina/INomina";
//Styles
import '../../Styles/Components/Nomina/nominaList.css';
import { AcademicBackgroundList, AreasList, DependentsList, PositionsList, SeniorityList } from '../../Helpers/Data';

interface EditMode {
	status: boolean,
    rowKey: number|null
}
type CheckboxItem = {
	document: number;
	value: boolean;
}
type Props = {
    nominas: INomina[];
    setNominas: Function;
    inEditMode: EditMode;
    email: string;
    setEmail: Function;
    position: string;
    setPosition: Function;
    positionLevel: string;
    setPositionLevel: Function;
    area: string;
    setArea: Function;
    dependents: boolean|null;
    setDependents: Function;
    seniority: string;
	setSeniority: Function;
    experience: number|null;
	setExperience: Function;
    academicBackground: string;
    setAcademicBackground: Function;
    checkedList: CheckboxItem[];
    setCheckedList: Function;
    onCancel: Function;
    onEdit: Function;
    onDelete: Function;
    onSave: Function;
}

const NominaList = ({
    nominas,
    setNominas,
    inEditMode,
    email,
    setEmail,
    position,
    setPosition,
    area,
    setArea,
    dependents,
    setDependents,
    positionLevel,
    setPositionLevel,
    seniority,
	setSeniority,
    experience,
	setExperience,
    academicBackground,
    setAcademicBackground,
    checkedList,
    setCheckedList,
    onCancel,
    onEdit,
    onDelete,
    onSave
}: Props) => {
    const [saving, setSaving] = useState<boolean>(false);
    const [deleting, setDeleting] = useState<boolean[]>(nominas.map(() => false));
    const [deletingSelected, setDeletingSelected] = useState<boolean>(false);

    const handleSave = async (numeroDocumento: number) => {
        setSaving(true);
        await onSave({
            academicBackground: academicBackground,
            area: area,
            email: email,
            experience: experience,
            position: position,
            positionLevel: positionLevel,
            dependents: dependents,
            seniority: seniority
        }, numeroDocumento);
        setSaving(false);
    }

    const handleDeleteAlone = async (numeroDocumento: number, index: number) => {
        let newDeleting = [...deleting];
        newDeleting[index] = true;
        setDeleting(newDeleting);
        await onDelete([{
            document: numeroDocumento,
            value: true
        }], true);
        setDeleting(nominas.map(() => false));
    }

    const handleDeleteSelected = async () => {
        setDeletingSelected(true);
        await onDelete(checkedList, true);
        setDeletingSelected(false);
    }

    const getCheckboxValue = (document: number) => {
        const index: number = nominas.findIndex(obj => obj.nominaElectronica.Trabajador.NumeroDocumento===document);
        return (index===-1) ? false : checkedList[index].value;
    }

    const handleChecked = (document: number, value: boolean) => {
        let newCheckedList = [...checkedList];
        const index: number = nominas.findIndex(obj => obj.nominaElectronica.Trabajador.NumeroDocumento===document);
        newCheckedList[index].value = value;
        setCheckedList(newCheckedList);
    }

    const handleCheckAll = (value: boolean) => nominas.forEach(nomina => handleChecked(nomina.nominaElectronica.Trabajador.NumeroDocumento, value));
    
	
	return (
        <div id="nomina-list">
            {(nominas.length > 0) ? (
                <>
                <div className="btn-delete-masivo">
                    <Button variant="danger"
                        onClick={() => handleDeleteSelected()}
                        disabled={(checkedList.findIndex(obj => obj.value===true) !== -1) ? false : true}
                    >{(deletingSelected) ? (<Spinner className="spinner" animation="border" role="status" size="sm" />) : "Eliminar seleccionados"}</Button>
                </div>
                <Table striped={false} bordered={true} hover={false} className="table-nomina" size="sm">
                    <thead>
                        <tr className="table-header-row">
                            <th className="selector-checkbox">
                                {<FormCheck type="checkbox" label=""
                                    checked={(checkedList.findIndex(obj => obj.value===false) !== -1) ? false : true}
                                    onChange={e => handleCheckAll(e.target.checked)} />}
                            </th>
                            <th>Nombre empleado</th>
                            <th>Correo electrónico</th>
                            <th>Area</th>
                            <th>Cargo</th>
                            <th>Nivel de cargo</th>
                            <th>Personas a cargo</th>
                            <th>Seniority</th>
                            <th>Experiencia</th>
                            <th>Formación</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {(checkedList.length===nominas.length) && nominas.map((person, i) => (
                            <tr key={i} className="table-header-row">
                                <td className="selector-checkbox">
                                    {<FormCheck type="checkbox" label=""
                                        checked={getCheckboxValue(person.nominaElectronica.Trabajador.NumeroDocumento)}
                                        onChange={e => handleChecked(person.nominaElectronica.Trabajador.NumeroDocumento, e.target.checked)} />}
                                </td>
                                <td className="td">
                                    <div>{`${person.nominaElectronica.Trabajador.PrimerNombre} ${person.nominaElectronica.Trabajador.OtrosNombres}`}</div>
                                    <div>{`${person.nominaElectronica.Trabajador.PrimerApellido} ${person.nominaElectronica.Trabajador.SegundoApellido}`}</div>
                                    <div>{person.nominaElectronica.Trabajador.NumeroDocumento}</div>
                                </td>
                                <td className="td">{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            type="email"
                                            placeholder="Ingrese el valor"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="mr-2"
                                        />
                                    ) : (
                                        person.nominaExtra.email
                                    )
                                }</td>
                                <td className="td">{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            onChange={(e) => setArea(e.target.value)}
                                            value={(area===null) ? "": area}
                                            as="select"
                                            className=""
                                        >
                                            <option value="" disabled={true}>Seleccione</option>
                                            {AreasList.map((area, i) => (
                                                <option key={i} value={area}>{area}</option>
                                            ))}
                                        </FormControl>
                                    ) : (
                                        person.nominaExtra.area
                                    )
                                }</td>
                                <td className="td">{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            onChange={(e) => setPosition(e.target.value)}
                                            value={(position===null) ? "": position}
                                            as="select"
                                            className=""
                                        >
                                            <option value="" disabled={true}>Seleccione</option>
                                            {PositionsList.map((position, i) => (
                                                <option key={i} value={position}>{position}</option>
                                            ))}
                                        </FormControl>
                                    ) : (
                                        person.nominaExtra.position
                                    )
                                }</td>
                                <td className="td">{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            type="text"
                                            placeholder="Ingrese el valor"
                                            value={positionLevel}
                                            onChange={(e) => setPositionLevel(e.target.value)}
                                            className="mr-2"
                                        />
                                    ) : (
                                        person.nominaExtra.positionLevel
                                    )
                                }</td>
                                <td>{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            onChange={(e) => (e.target.value==="SI") ? setDependents(true) : (e.target.value==="NO") ? setDependents(false) : setDependents(null)}
                                            value={(dependents===null) ? "": (dependents===true) ? "SI" : "NO"}
                                            as="select"
                                            className=""
                                        >
                                            <option value="" disabled={true}>Seleccione</option>
                                            {DependentsList.map((dependent, i) => (
                                                <option key={i} value={dependent}>{dependent}</option>
                                            ))}
                                        </FormControl>
                                    ) : (
                                        (person.nominaExtra.dependents===true) ? "SI" : (person.nominaExtra.dependents===false) ? "NO" : ""
                                    )
                                }</td>
                                <td>{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            onChange={(e) => setSeniority(e.target.value)}
                                            value={(seniority===null) ? "": seniority}
                                            as="select"
                                            className=""
                                        >
                                            <option value="" disabled={true}>Seleccione</option>
                                            {SeniorityList.map((seniority, i) => (
                                                <option key={i} value={seniority}>{seniority}</option>
                                            ))}
                                        </FormControl>
                                    ) : (
                                        person.nominaExtra.seniority
                                    )
                                }</td>
                                <td>{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            type="number"
                                            placeholder="Ingrese el valor"
                                            value={(experience===null) ? "" : experience}
                                            onChange={(e) => setExperience((e.target.value==="") ? null : parseInt(e.target.value))}
                                            className="mr-2"
                                        />
                                    ) : (
                                        person.nominaExtra.experience
                                    )
                                }</td>
                                <td>{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <FormControl
                                            onChange={(e) => setAcademicBackground(e.target.value)}
                                            value={(academicBackground===null) ? "": academicBackground}
                                            as="select"
                                            className=""
                                        >
                                            <option value="" disabled={true}>Seleccione</option>
                                            {AcademicBackgroundList.map((academicBackground, i) => (
                                                <option key={i} value={academicBackground}>{academicBackground}</option>
                                            ))}
                                        </FormControl>
                                    ) : (
                                        person.nominaExtra.academicBackground
                                    )
                                }</td>
                                <td className="buttons-area">{
                                    inEditMode.status && inEditMode.rowKey === person.nominaElectronica.Trabajador.NumeroDocumento ? (
                                        <div className="buttons-container">
                                            <Button variant="outline-success" className="btn" title="Guardar"
                                                onClick={() => handleSave(person.nominaElectronica.Trabajador.NumeroDocumento)}
                                            >
                                                {(saving) ? (<Spinner className="spinner" animation="border" role="status" size="sm" />) : (<BsCheck />)}
                                            </Button>
                                            <Button variant="outline-danger" className="btn" title="Cancelar"
                                                onClick={() => onCancel()}
                                            ><BsX /></Button>
                                        </div>
                                    ) : (
                                        <div className="buttons-container">
                                            {/*<Button variant="outline-primary" className="btn" title="Editar"
                                                onClick={() => onEdit({
                                                    academicBackground: person.nominaExtra.academicBackground,
                                                    area: person.nominaExtra.area,
                                                    email: person.nominaExtra.email,
                                                    experience: person.nominaExtra.experience,
                                                    position: person.nominaExtra.position,
                                                    positionLevel: person.nominaExtra.positionLevel,
                                                    dependents: person.nominaExtra.dependents,
                                                    seniority: person.nominaExtra.seniority
                                                }, person.nominaElectronica.Trabajador.NumeroDocumento)}
                                            ><BsPencilSquare /></Button>*/}
                                            <Button variant="outline-danger" className="btn" title="Eliminar"
                                                onClick={() => handleDeleteAlone(person.nominaElectronica.Trabajador.NumeroDocumento, i)}
                                            >
                                                {(deleting[i]) ? (<Spinner className="spinner" animation="border" role="status" size="sm" />) : (<BsTrash />)}
                                            </Button>
                                        </div>
                                    )
                                }</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </>
            ) : null}
        </div>
	);
}
export default NominaList;
