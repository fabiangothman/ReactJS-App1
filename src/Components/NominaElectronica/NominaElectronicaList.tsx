import { Table } from 'react-bootstrap';
//Interfaces
import { INominaElectronica } from "./INominaElectronica";
//Styles
import '../../Styles/Components/NominaElectronica/nominaList.css';

interface Props {
    nominasToUpload: INominaElectronica[]
}

const NominaElectronicaList = ({nominasToUpload}: Props) => {
	
	return (
        <Table id="nomina-list" striped bordered={true} hover size="sm">
            <thead>
                <tr>
                    <th colSpan={1} rowSpan={4}>CodigoQR</th>
                    <th colSpan={1} rowSpan={4}>ComprobanteTotal</th>
                    <th colSpan={26} rowSpan={1}>Deducciones</th>
                    <th colSpan={1} rowSpan={4}>DeduccionesTotal</th>
                    <th colSpan={93} rowSpan={1}>Devengados</th>
                    <th colSpan={1} rowSpan={4}>DevengadosTotal</th>
                    <th colSpan={11} rowSpan={1}>Empleador</th>
                    <th colSpan={1} rowSpan={1}>FechasPagos</th>
                    <th colSpan={10} rowSpan={1}>InformacionGeneral</th>
                    <th colSpan={4} rowSpan={1}>LugarGeneracionXML</th>
                    <th colSpan={1} rowSpan={4}>Notas</th>
                    <th colSpan={1} rowSpan={1}>Novedad</th>
                    <th colSpan={4} rowSpan={1}>NumeroSecuenciaXML</th>
                    <th colSpan={5} rowSpan={1}>Pago</th>
                    <th colSpan={6} rowSpan={1}>Periodo</th>
                    <th colSpan={9} rowSpan={1}>ProveedorXML</th>                    
                    <th colSpan={1} rowSpan={4}>Redondeo</th>
                    <th colSpan={17} rowSpan={1}>Trabajador</th>
                </tr>
                <tr>
                    {/* Deducciones */}
                    <th rowSpan={3} colSpan={1}>AFC</th>
                    <th rowSpan={1} colSpan={1}>Anticipos</th>
                    <th rowSpan={3} colSpan={1}>Cooperativa</th>
                    <th rowSpan={3} colSpan={1}>Deuda</th>
                    <th rowSpan={3} colSpan={1}>Educacion</th>
                    <th rowSpan={3} colSpan={1}>EmbargoFiscal</th>
                    <th rowSpan={1} colSpan={2}>FondoPension</th>
                    <th rowSpan={1} colSpan={4}>FondoSP</th>
                    <th rowSpan={1} colSpan={2}>Libranzas</th>
                    <th rowSpan={1} colSpan={1}>OtrasDeducciones</th>
                    <th rowSpan={1} colSpan={1}>PagosTerceros</th>
                    <th rowSpan={3} colSpan={1}>PensionVoluntaria</th>
                    <th rowSpan={3} colSpan={1}>PlanComplementarios</th>
                    <th rowSpan={3} colSpan={1}>Reintegro</th>
                    <th rowSpan={3} colSpan={1}>RetencionFuente</th>
                    <th rowSpan={1} colSpan={2}>Salud</th>
                    <th rowSpan={1} colSpan={2}>Sanciones</th>
                    <th rowSpan={1} colSpan={2}>Sindicatos</th>
                    {/* Devengados */}
                    <th colSpan={1} rowSpan={1}>Anticipos</th>
                    <th colSpan={1} rowSpan={3}>ApoyoSost</th>
                    <th colSpan={2} rowSpan={1}>Auxilios</th>
                    <th colSpan={2} rowSpan={1}>Basico</th>
                    <th colSpan={1} rowSpan={3}>BonifRetiro</th>
                    <th colSpan={2} rowSpan={1}>Bonificaciones</th>
                    <th colSpan={4} rowSpan={1}>BonoEPCTVs</th>
                    <th colSpan={3} rowSpan={1}>Cesantias</th>
                    <th colSpan={1} rowSpan={1}>Comisiones</th>
                    <th colSpan={2} rowSpan={1}>Compensaciones</th>
                    <th colSpan={1} rowSpan={3}>Dotacion</th>
                    <th colSpan={5} rowSpan={1}>HEDDFs</th>
                    <th colSpan={5} rowSpan={1}>HEDs</th>
                    <th colSpan={5} rowSpan={1}>HENDFs</th>
                    <th colSpan={5} rowSpan={1}>HENs</th>
                    <th colSpan={5} rowSpan={1}>HRDDFs</th>
                    <th colSpan={5} rowSpan={1}>HRNDFs</th>
                    <th colSpan={5} rowSpan={1}>HRNs</th>
                    <th colSpan={3} rowSpan={1}>HuelgasLegales</th>
                    <th colSpan={5} rowSpan={1}>Incapacidades</th>
                    <th colSpan={1} rowSpan={3}>Indemnizacion</th>
                    <th colSpan={11} rowSpan={1}>Licencias</th>
                    <th colSpan={3} rowSpan={1}>OtrosConceptos</th>
                    <th colSpan={1} rowSpan={1}>PagosTerceros</th>
                    <th colSpan={3} rowSpan={1}>Primas</th>
                    <th colSpan={1} rowSpan={3}>Reintegro</th>
                    <th colSpan={1} rowSpan={3}>Teletrabajo</th>
                    <th colSpan={3} rowSpan={1}>Transporte</th>
                    <th colSpan={6} rowSpan={1}>Vacaciones</th>
                    {/* Empleador */}
                    <th colSpan={1} rowSpan={3}>DV</th>
                    <th colSpan={1} rowSpan={3}>DepartamentoEstado</th>
                    <th colSpan={1} rowSpan={3}>Direccion</th>
                    <th colSpan={1} rowSpan={3}>MunicipioCiudad</th>
                    <th colSpan={1} rowSpan={3}>NIT</th>
                    <th colSpan={1} rowSpan={3}>OtrosNombres</th>
                    <th colSpan={1} rowSpan={3}>Pais</th>
                    <th colSpan={1} rowSpan={3}>PrimerApellido</th>
                    <th colSpan={1} rowSpan={3}>PrimerNombre</th>
                    <th colSpan={1} rowSpan={3}>RazonSocial</th>
                    <th colSpan={1} rowSpan={3}>SegundoApellido</th>
                    {/* FechasPagos */}
                    <th colSpan={1} rowSpan={3}>FechaPago</th>
                    {/* InformacionGeneral */}
                    <th colSpan={1} rowSpan={3}>Ambiente</th>
                    <th colSpan={1} rowSpan={3}>CUNE</th>
                    <th colSpan={1} rowSpan={3}>EncripCUNE</th>
                    <th colSpan={1} rowSpan={3}>FechaGen</th>
                    <th colSpan={1} rowSpan={3}>HoraGen</th>
                    <th colSpan={1} rowSpan={3}>PeriodoNomina</th>
                    <th colSpan={1} rowSpan={3}>TRM</th>
                    <th colSpan={1} rowSpan={3}>TipoMoneda</th>
                    <th colSpan={1} rowSpan={3}>TipoXML</th>
                    <th colSpan={1} rowSpan={3}>Version</th>
                    {/* LugarGeneracionXML */}
                    <th colSpan={1} rowSpan={3}>DepartamentoEstado</th>
                    <th colSpan={1} rowSpan={3}>Idioma</th>
                    <th colSpan={1} rowSpan={3}>MunicipioCiudad</th>
                    <th colSpan={1} rowSpan={3}>Pais</th>
                    {/* Novedad */}
                    <th colSpan={1} rowSpan={3}>CUNENov</th>
                    {/* NumeroSecuenciaXML */}
                    <th colSpan={1} rowSpan={3}>CodigoTrabajador</th>
                    <th colSpan={1} rowSpan={3}>Consecutivo</th>
                    <th colSpan={1} rowSpan={3}>Numero</th>
                    <th colSpan={1} rowSpan={3}>Prefijo</th>
                    {/* Pago */}
                    <th colSpan={1} rowSpan={3}>Banco</th>
                    <th colSpan={1} rowSpan={3}>Forma</th>
                    <th colSpan={1} rowSpan={3}>Metodo</th>
                    <th colSpan={1} rowSpan={3}>NumeroCuenta</th>
                    <th colSpan={1} rowSpan={3}>TipoCuenta</th>
                    {/* Periodo */}
                    <th colSpan={1} rowSpan={3}>FechaGen</th>
                    <th colSpan={1} rowSpan={3}>FechaIngreso</th>
                    <th colSpan={1} rowSpan={3}>FechaLiquidacionFin</th>
                    <th colSpan={1} rowSpan={3}>FechaLiquidacionInicio</th>
                    <th colSpan={1} rowSpan={3}>FechaRetiro</th>
                    <th colSpan={1} rowSpan={3}>TiempoLaborado</th>
                    {/* ProveedorXML */}
                    <th colSpan={1} rowSpan={3}>DV</th>
                    <th colSpan={1} rowSpan={3}>NIT</th>
                    <th colSpan={1} rowSpan={3}>OtrosNombres</th>
                    <th colSpan={1} rowSpan={3}>PrimerApellido</th>
                    <th colSpan={1} rowSpan={3}>PrimerNombre</th>
                    <th colSpan={1} rowSpan={3}>RazonSocial</th>
                    <th colSpan={1} rowSpan={3}>SegundoApellido</th>
                    <th colSpan={1} rowSpan={3}>SoftwareID</th>
                    <th colSpan={1} rowSpan={3}>SoftwareSC</th>
                    {/* Trabajador */}
                    <th colSpan={1} rowSpan={3}>AltoRiesgoPension</th>
                    <th colSpan={1} rowSpan={3}>CodigoTrabajador</th>
                    <th colSpan={1} rowSpan={3}>LugarTrabajoDepartamentoEstado</th>
                    <th colSpan={1} rowSpan={3}>LugarTrabajoDireccion</th>
                    <th colSpan={1} rowSpan={3}>LugarTrabajoMunicipioCiudad</th>
                    <th colSpan={1} rowSpan={3}>LugarTrabajoPais</th>
                    <th colSpan={1} rowSpan={3}>NumeroDocumento</th>
                    <th colSpan={1} rowSpan={3}>OtrosNombres</th>
                    <th colSpan={1} rowSpan={3}>PrimerApellido</th>
                    <th colSpan={1} rowSpan={3}>PrimerNombre</th>
                    <th colSpan={1} rowSpan={3}>SalarioIntegral</th>
                    <th colSpan={1} rowSpan={3}>SegundoApellido</th>
                    <th colSpan={1} rowSpan={3}>SubTipoTrabajador</th>
                    <th colSpan={1} rowSpan={3}>Sueldo</th>
                    <th colSpan={1} rowSpan={3}>TipoContrato</th>
                    <th colSpan={1} rowSpan={3}>TipoDocumento</th>
                    <th colSpan={1} rowSpan={3}>TipoTrabajador</th>
                </tr>
                <tr>
                    {/* Deducciones */}
                    <th rowSpan={2} colSpan={1}>Anticipo</th>
                    <th rowSpan={2} colSpan={1}>Deduccion</th>
                    <th rowSpan={2} colSpan={1}>Porcentaje</th>
                    <th rowSpan={2} colSpan={1}>Deduccion</th>
                    <th rowSpan={2} colSpan={1}>DeduccionSub</th>
                    <th rowSpan={2} colSpan={1}>Porcentaje</th>
                    <th rowSpan={2} colSpan={1}>PorcentajeSub</th>
                    <th rowSpan={1} colSpan={2}>Libranza</th>
                    <th rowSpan={2} colSpan={1}>OtraDeduccion</th>
                    <th rowSpan={2} colSpan={1}>PagoTercero</th>
                    <th rowSpan={2} colSpan={1}>Deduccion</th>
                    <th rowSpan={2} colSpan={1}>Porcentaje</th>
                    <th rowSpan={1} colSpan={2}>Sancion</th>
                    <th rowSpan={1} colSpan={2}>Sindicato</th>
                    {/* Devengados */}
                    <th colSpan={1} rowSpan={2}>Anticipo</th>
                    <th colSpan={2} rowSpan={1}>Auxilio</th>
                    <th colSpan={1} rowSpan={2}>DiasTrabajados</th>
                    <th colSpan={1} rowSpan={2}>SueldoTrabajado</th>
                    <th colSpan={2} rowSpan={1}>Bonificacion</th>
                    <th colSpan={4} rowSpan={1}>BonoEPCTV</th>
                    <th colSpan={1} rowSpan={2}>Pago</th>
                    <th colSpan={1} rowSpan={2}>PagoIntereses</th>
                    <th colSpan={1} rowSpan={2}>Porcentaje</th>
                    <th colSpan={1} rowSpan={2}>Comision</th>
                    <th colSpan={2} rowSpan={1}>Compensacion</th>
                    <th colSpan={5} rowSpan={1}>HEDDF</th>
                    <th colSpan={5} rowSpan={1}>HED</th>
                    <th colSpan={5} rowSpan={1}>HENDF</th>
                    <th colSpan={5} rowSpan={1}>HEN</th>
                    <th colSpan={5} rowSpan={1}>HRDDF</th>
                    <th colSpan={5} rowSpan={1}>HRNDF</th>
                    <th colSpan={5} rowSpan={1}>HRN</th>
                    <th colSpan={3} rowSpan={1}>HuelgaLegal</th>
                    <th colSpan={5} rowSpan={1}>Incapacidad</th>
                    <th colSpan={4} rowSpan={1}>LicenciaMP</th>
                    <th colSpan={3} rowSpan={1}>LicenciaNR</th>
                    <th colSpan={4} rowSpan={1}>LicenciaR</th>
                    <th colSpan={3} rowSpan={1}>OtroConcepto</th>
                    <th colSpan={1} rowSpan={2}>PagoTercero</th>
                    <th colSpan={1} rowSpan={2}>Cantidad</th>
                    <th colSpan={1} rowSpan={2}>Pago</th>
                    <th colSpan={1} rowSpan={2}>PagoNS</th>
                    <th colSpan={1} rowSpan={2}>AuxilioTransporte</th>
                    <th colSpan={1} rowSpan={2}>ViaticoManutAlojNS</th>
                    <th colSpan={1} rowSpan={2}>ViaticoManutAlojS</th>
                    <th colSpan={2} rowSpan={1}>VacacionesCompensadas</th>
                    <th colSpan={4} rowSpan={1}>VacacionesComunes</th>
                </tr>
                <tr>
                    {/* Deducciones */}
                    <th colSpan={1} rowSpan={1}>Deduccion</th>
                    <th colSpan={1} rowSpan={1}>Descripcion</th>
                    <th colSpan={1} rowSpan={1}>SancionPriv</th>
                    <th colSpan={1} rowSpan={1}>SancionPublic</th>
                    <th colSpan={1} rowSpan={1}>Deduccion</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    {/* Devengados */}
                    <th colSpan={1} rowSpan={1}>AuxilioNS</th>
                    <th colSpan={1} rowSpan={1}>AuxilioS</th>
                    <th colSpan={1} rowSpan={1}>BonificacionNS</th>
                    <th colSpan={1} rowSpan={1}>BonificacionS</th>
                    <th colSpan={1} rowSpan={1}>PagoAlimentacionNS</th>
                    <th colSpan={1} rowSpan={1}>PagoAlimentacionS</th>
                    <th colSpan={1} rowSpan={1}>PagoNS</th>
                    <th colSpan={1} rowSpan={1}>PagoS</th>
                    <th colSpan={1} rowSpan={1}>CompensacionE</th>
                    <th colSpan={1} rowSpan={1}>CompensacionO</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>HoraFin</th>
                    <th colSpan={1} rowSpan={1}>HoraInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Porcentaje</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Tipo</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>ConceptoNS</th>
                    <th colSpan={1} rowSpan={1}>ConceptoS</th>
                    <th colSpan={1} rowSpan={1}>DescripcionConcepto</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                    <th colSpan={1} rowSpan={1}>Cantidad</th>
                    <th colSpan={1} rowSpan={1}>FechaFin</th>
                    <th colSpan={1} rowSpan={1}>FechaInicio</th>
                    <th colSpan={1} rowSpan={1}>Pago</th>
                </tr>
            </thead>
            <tbody>
                {nominasToUpload.map((nomina, i) => (
                    <tr key={i}>
                        <td>{nomina.CodigoQR}</td>
                        <td>{nomina.ComprobanteTotal}</td>
                        <td>{nomina.Deducciones.AFC}</td>
                        <td>{nomina.Deducciones.Anticipos.Anticipo}</td>
                        <td>{nomina.Deducciones.Cooperativa}</td>
                        <td>{nomina.Deducciones.Deuda}</td>
                        <td>{nomina.Deducciones.Educacion}</td>
                        <td>{nomina.Deducciones.EmbargoFiscal}</td>
                        <td>{nomina.Deducciones.FondoPension.Deduccion}</td>
                        <td>{nomina.Deducciones.FondoPension.Porcentaje}</td>
                        <td>{nomina.Deducciones.FondoSP.Deduccion}</td>
                        <td>{nomina.Deducciones.FondoSP.DeduccionSub}</td>
                        <td>{nomina.Deducciones.FondoSP.Porcentaje}</td>
                        <td>{nomina.Deducciones.FondoSP.PorcentajeSub}</td>
                        <td>{nomina.Deducciones.Libranzas.Libranza.Deduccion}</td>
                        <td>{nomina.Deducciones.Libranzas.Libranza.Descripcion}</td>
                        <td>{nomina.Deducciones.OtrasDeducciones.OtraDeduccion}</td>
                        <td>{nomina.Deducciones.PagosTerceros.PagoTercero}</td>
                        <td>{nomina.Deducciones.PensionVoluntaria}</td>
                        <td>{nomina.Deducciones.PlanComplementarios}</td>
                        <td>{nomina.Deducciones.Reintegro}</td>
                        <td>{nomina.Deducciones.RetencionFuente}</td>
                        <td>{nomina.Deducciones.Salud.Deduccion}</td>
                        <td>{nomina.Deducciones.Salud.Porcentaje}</td>
                        <td>{nomina.Deducciones.Sanciones.Sancion.SancionPriv}</td>
                        <td>{nomina.Deducciones.Sanciones.Sancion.SancionPublic}</td>
                        <td>{nomina.Deducciones.Sindicatos.Sindicato.Deduccion}</td>
                        <td>{nomina.Deducciones.Sindicatos.Sindicato.Porcentaje}</td>
                        <td>{nomina.DeduccionesTotal}</td>
                        <td>{nomina.Devengados.Anticipos.Anticipo}</td>
                        <td>{nomina.Devengados.ApoyoSost}</td>
                        <td>{nomina.Devengados.Auxilios.Auxilio.AuxilioNS}</td>
                        <td>{nomina.Devengados.Auxilios.Auxilio.AuxilioS}</td>
                        <td>{nomina.Devengados.Basico.DiasTrabajados}</td>
                        <td>{nomina.Devengados.Basico.SueldoTrabajado}</td>
                        <td>{nomina.Devengados.BonifRetiro}</td>
                        <td>{nomina.Devengados.Bonificaciones.Bonificacion.BonificacionNS}</td>
                        <td>{nomina.Devengados.Bonificaciones.Bonificacion.BonificacionS}</td>
                        <td>{nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoAlimentacionNS}</td>
                        <td>{nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoAlimentacionS}</td>
                        <td>{nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoNS}</td>
                        <td>{nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoS}</td>
                        <td>{nomina.Devengados.Cesantias.Pago}</td>
                        <td>{nomina.Devengados.Cesantias.PagoIntereses}</td>
                        <td>{nomina.Devengados.Cesantias.Porcentaje}</td>
                        <td>{nomina.Devengados.Comisiones.Comision}</td>
                        <td>{nomina.Devengados.Compensaciones.Compensacion.CompensacionE}</td>
                        <td>{nomina.Devengados.Compensaciones.Compensacion.CompensacionO}</td>
                        <td>{nomina.Devengados.Dotacion}</td>
                        <td>{nomina.Devengados.HEDDFs.HEDDF.Cantidad}</td>
                        <td>{`${nomina.Devengados.HEDDFs.HEDDF.HoraFin.getFullYear()}/${nomina.Devengados.HEDDFs.HEDDF.HoraFin.getMonth()+1}/${nomina.Devengados.HEDDFs.HEDDF.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HEDDFs.HEDDF.HoraInicio.getFullYear()}/${nomina.Devengados.HEDDFs.HEDDF.HoraInicio.getMonth()+1}/${nomina.Devengados.HEDDFs.HEDDF.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HEDDFs.HEDDF.Pago}</td>
                        <td>{nomina.Devengados.HEDDFs.HEDDF.Porcentaje}</td>
                        <td>{nomina.Devengados.HEDs.HED.Cantidad}</td>
                        <td>{`${nomina.Devengados.HEDs.HED.HoraFin.getFullYear()}/${nomina.Devengados.HEDs.HED.HoraFin.getMonth()+1}/${nomina.Devengados.HEDs.HED.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HEDs.HED.HoraInicio.getFullYear()}/${nomina.Devengados.HEDs.HED.HoraInicio.getMonth()+1}/${nomina.Devengados.HEDs.HED.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HEDs.HED.Pago}</td>
                        <td>{nomina.Devengados.HEDs.HED.Porcentaje}</td>
                        <td>{nomina.Devengados.HENDFs.HENDF.Cantidad}</td>
                        <td>{`${nomina.Devengados.HENDFs.HENDF.HoraFin.getFullYear()}/${nomina.Devengados.HENDFs.HENDF.HoraFin.getMonth()+1}/${nomina.Devengados.HENDFs.HENDF.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HENDFs.HENDF.HoraInicio.getFullYear()}/${nomina.Devengados.HENDFs.HENDF.HoraInicio.getMonth()+1}/${nomina.Devengados.HENDFs.HENDF.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HENDFs.HENDF.Pago}</td>
                        <td>{nomina.Devengados.HENDFs.HENDF.Porcentaje}</td>
                        <td>{nomina.Devengados.HENs.HEN.Cantidad}</td>
                        <td>{`${nomina.Devengados.HENs.HEN.HoraFin.getFullYear()}/${nomina.Devengados.HENs.HEN.HoraFin.getMonth()+1}/${nomina.Devengados.HENs.HEN.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HENs.HEN.HoraInicio.getFullYear()}/${nomina.Devengados.HENs.HEN.HoraInicio.getMonth()+1}/${nomina.Devengados.HENs.HEN.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HENs.HEN.Pago}</td>
                        <td>{nomina.Devengados.HENs.HEN.Porcentaje}</td>
                        <td>{nomina.Devengados.HRDDFs.HRDDF.Cantidad}</td>
                        <td>{`${nomina.Devengados.HRDDFs.HRDDF.HoraFin.getFullYear()}/${nomina.Devengados.HRDDFs.HRDDF.HoraFin.getMonth()+1}/${nomina.Devengados.HRDDFs.HRDDF.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HRDDFs.HRDDF.HoraInicio.getFullYear()}/${nomina.Devengados.HRDDFs.HRDDF.HoraInicio.getMonth()+1}/${nomina.Devengados.HRDDFs.HRDDF.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HRDDFs.HRDDF.Pago}</td>
                        <td>{nomina.Devengados.HRDDFs.HRDDF.Porcentaje}</td>
                        <td>{nomina.Devengados.HRNDFs.HRNDF.Cantidad}</td>
                        <td>{`${nomina.Devengados.HRNDFs.HRNDF.HoraFin.getFullYear()}/${nomina.Devengados.HRNDFs.HRNDF.HoraFin.getMonth()+1}/${nomina.Devengados.HRNDFs.HRNDF.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HRNDFs.HRNDF.HoraInicio.getFullYear()}/${nomina.Devengados.HRNDFs.HRNDF.HoraInicio.getMonth()+1}/${nomina.Devengados.HRNDFs.HRNDF.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HRNDFs.HRNDF.Pago}</td>
                        <td>{nomina.Devengados.HRNDFs.HRNDF.Porcentaje}</td>
                        <td>{nomina.Devengados.HRNs.HRN.Cantidad}</td>
                        <td>{`${nomina.Devengados.HRNs.HRN.HoraFin.getFullYear()}/${nomina.Devengados.HRNs.HRN.HoraFin.getMonth()+1}/${nomina.Devengados.HRNs.HRN.HoraFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HRNs.HRN.HoraInicio.getFullYear()}/${nomina.Devengados.HRNs.HRN.HoraInicio.getMonth()+1}/${nomina.Devengados.HRNs.HRN.HoraInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.HRNs.HRN.Pago}</td>
                        <td>{nomina.Devengados.HRNs.HRN.Porcentaje}</td>
                        <td>{nomina.Devengados.HuelgasLegales.HuelgaLegal.Cantidad}</td>
                        <td>{`${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaFin.getFullYear()}/${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaFin.getMonth()+1}/${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaInicio.getFullYear()}/${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaInicio.getMonth()+1}/${nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Incapacidades.Incapacidad.Cantidad}</td>
                        <td>{`${nomina.Devengados.Incapacidades.Incapacidad.FechaFin.getFullYear()}/${nomina.Devengados.Incapacidades.Incapacidad.FechaFin.getMonth()+1}/${nomina.Devengados.Incapacidades.Incapacidad.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.Incapacidades.Incapacidad.FechaInicio.getFullYear()}/${nomina.Devengados.Incapacidades.Incapacidad.FechaInicio.getMonth()+1}/${nomina.Devengados.Incapacidades.Incapacidad.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Incapacidades.Incapacidad.Pago}</td>
                        <td>{nomina.Devengados.Incapacidades.Incapacidad.Tipo}</td>
                        <td>{nomina.Devengados.Indemnizacion}</td>
                        <td>{nomina.Devengados.Licencias.LicenciaMP.Cantidad}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaMP.FechaFin.getFullYear()}/${nomina.Devengados.Licencias.LicenciaMP.FechaFin.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaMP.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaMP.FechaInicio.getFullYear()}/${nomina.Devengados.Licencias.LicenciaMP.FechaInicio.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaMP.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Licencias.LicenciaMP.Pago}</td>
                        <td>{nomina.Devengados.Licencias.LicenciaNR.Cantidad}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaNR.FechaFin.getFullYear()}/${nomina.Devengados.Licencias.LicenciaNR.FechaFin.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaNR.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaNR.FechaInicio.getFullYear()}/${nomina.Devengados.Licencias.LicenciaNR.FechaInicio.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaNR.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Licencias.LicenciaR.Cantidad}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaR.FechaFin.getFullYear()}/${nomina.Devengados.Licencias.LicenciaR.FechaFin.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaR.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.Licencias.LicenciaR.FechaInicio.getFullYear()}/${nomina.Devengados.Licencias.LicenciaR.FechaInicio.getMonth()+1}/${nomina.Devengados.Licencias.LicenciaR.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Licencias.LicenciaR.Pago}</td>
                        <td>{nomina.Devengados.OtrosConceptos.OtroConcepto.ConceptoNS}</td>
                        <td>{nomina.Devengados.OtrosConceptos.OtroConcepto.ConceptoS}</td>
                        <td>{nomina.Devengados.OtrosConceptos.OtroConcepto.DescripcionConcepto}</td>
                        <td>{nomina.Devengados.PagosTerceros.PagoTercero}</td>
                        <td>{nomina.Devengados.Primas.Cantidad}</td>
                        <td>{nomina.Devengados.Primas.Pago}</td>
                        <td>{nomina.Devengados.Primas.PagoNS}</td>
                        <td>{nomina.Devengados.Reintegro}</td>
                        <td>{nomina.Devengados.Teletrabajo}</td>
                        <td>{nomina.Devengados.Transporte.AuxilioTransporte}</td>
                        <td>{nomina.Devengados.Transporte.ViaticoManutAlojNS}</td>
                        <td>{nomina.Devengados.Transporte.ViaticoManutAlojS}</td>
                        <td>{nomina.Devengados.Vacaciones.VacacionesCompensadas.Cantidad}</td>
                        <td>{nomina.Devengados.Vacaciones.VacacionesCompensadas.Pago}</td>
                        <td>{nomina.Devengados.Vacaciones.VacacionesComunes.Cantidad}</td>
                        <td>{`${nomina.Devengados.Vacaciones.VacacionesComunes.FechaFin.getFullYear()}/${nomina.Devengados.Vacaciones.VacacionesComunes.FechaFin.getMonth()+1}/${nomina.Devengados.Vacaciones.VacacionesComunes.FechaFin.getDate()}`}</td>
                        <td>{`${nomina.Devengados.Vacaciones.VacacionesComunes.FechaInicio.getFullYear()}/${nomina.Devengados.Vacaciones.VacacionesComunes.FechaInicio.getMonth()+1}/${nomina.Devengados.Vacaciones.VacacionesComunes.FechaInicio.getDate()}`}</td>
                        <td>{nomina.Devengados.Vacaciones.VacacionesComunes.Pago}</td>
                        <td>{nomina.DevengadosTotal}</td>
                        <td>{nomina.Empleador.DV}</td>
                        <td>{nomina.Empleador.DepartamentoEstado}</td>
                        <td>{nomina.Empleador.Direccion}</td>
                        <td>{nomina.Empleador.MunicipioCiudad}</td>
                        <td>{nomina.Empleador.NIT}</td>
                        <td>{nomina.Empleador.OtrosNombres}</td>
                        <td>{nomina.Empleador.Pais}</td>
                        <td>{nomina.Empleador.PrimerApellido}</td>
                        <td>{nomina.Empleador.PrimerNombre}</td>
                        <td>{nomina.Empleador.RazonSocial}</td>
                        <td>{nomina.Empleador.SegundoApellido}</td>
                        <td>{`${nomina.FechasPagos.FechaPago.getFullYear()}/${nomina.FechasPagos.FechaPago.getMonth()+1}/${nomina.FechasPagos.FechaPago.getDate()}`}</td>
                        <td>{nomina.InformacionGeneral.Ambiente}</td>
                        <td>{nomina.InformacionGeneral.CUNE}</td>
                        <td>{nomina.InformacionGeneral.EncripCUNE}</td>
                        <td>{`${nomina.InformacionGeneral.FechaGen.getFullYear()}/${nomina.InformacionGeneral.FechaGen.getMonth()+1}/${nomina.InformacionGeneral.FechaGen.getDate()}`}</td>
                        <td>{nomina.InformacionGeneral.HoraGen}</td>
                        <td>{nomina.InformacionGeneral.PeriodoNomina}</td>
                        <td>{nomina.InformacionGeneral.TRM}</td>
                        <td>{nomina.InformacionGeneral.TipoMoneda}</td>
                        <td>{nomina.InformacionGeneral.TipoXML}</td>
                        <td>{nomina.InformacionGeneral.Version}</td>
                        <td>{nomina.LugarGeneracionXML.DepartamentoEstado}</td>
                        <td>{nomina.LugarGeneracionXML.Idioma}</td>
                        <td>{nomina.LugarGeneracionXML.MunicipioCiudad}</td>
                        <td>{nomina.LugarGeneracionXML.Pais}</td>
                        <td>{nomina.Notas}</td>
                        <td>{nomina.Novedad.CUNENov}</td>
                        <td>{nomina.NumeroSecuenciaXML.CodigoTrabajador}</td>
                        <td>{nomina.NumeroSecuenciaXML.Consecutivo}</td>
                        <td>{nomina.NumeroSecuenciaXML.Numero}</td>
                        <td>{nomina.NumeroSecuenciaXML.Prefijo}</td>
                        <td>{nomina.Pago.Banco}</td>
                        <td>{nomina.Pago.Forma}</td>
                        <td>{nomina.Pago.Metodo}</td>
                        <td>{nomina.Pago.NumeroCuenta}</td>
                        <td>{nomina.Pago.TipoCuenta}</td>
                        <td>{`${nomina.Periodo.FechaGen.getFullYear()}/${nomina.Periodo.FechaGen.getMonth()+1}/${nomina.Periodo.FechaGen.getDate()}`}</td>
                        <td>{`${nomina.Periodo.FechaIngreso.getFullYear()}/${nomina.Periodo.FechaIngreso.getMonth()+1}/${nomina.Periodo.FechaIngreso.getDate()}`}</td>
                        <td>{`${nomina.Periodo.FechaLiquidacionFin.getFullYear()}/${nomina.Periodo.FechaLiquidacionFin.getMonth()+1}/${nomina.Periodo.FechaLiquidacionFin.getDate()}`}</td>
                        <td>{`${nomina.Periodo.FechaLiquidacionInicio.getFullYear()}/${nomina.Periodo.FechaLiquidacionInicio.getMonth()+1}/${nomina.Periodo.FechaLiquidacionInicio.getDate()}`}</td>
                        <td>{`${nomina.Periodo.FechaRetiro.getFullYear()}/${nomina.Periodo.FechaRetiro.getMonth()+1}/${nomina.Periodo.FechaRetiro.getDate()}`}</td>
                        <td>{nomina.Periodo.TiempoLaborado}</td>
                        <td>{nomina.ProveedorXML.DV}</td>
                        <td>{nomina.ProveedorXML.NIT}</td>
                        <td>{nomina.ProveedorXML.OtrosNombres}</td>
                        <td>{nomina.ProveedorXML.PrimerApellido}</td>
                        <td>{nomina.ProveedorXML.PrimerNombre}</td>
                        <td>{nomina.ProveedorXML.RazonSocial}</td>
                        <td>{nomina.ProveedorXML.SegundoApellido}</td>
                        <td>{nomina.ProveedorXML.SoftwareID}</td>
                        <td>{nomina.ProveedorXML.SoftwareSC}</td>
                        <td>{nomina.Redondeo}</td>
                        <td>{(nomina.Trabajador.AltoRiesgoPension) ? "SI" : "NO"}</td>
                        <td>{nomina.Trabajador.CodigoTrabajador}</td>
                        <td>{nomina.Trabajador.LugarTrabajoDepartamentoEstado}</td>
                        <td>{nomina.Trabajador.LugarTrabajoDireccion}</td>
                        <td>{nomina.Trabajador.LugarTrabajoMunicipioCiudad}</td>
                        <td>{nomina.Trabajador.LugarTrabajoPais}</td>
                        <td>{nomina.Trabajador.NumeroDocumento}</td>
                        <td>{nomina.Trabajador.OtrosNombres}</td>
                        <td>{nomina.Trabajador.PrimerApellido}</td>
                        <td>{nomina.Trabajador.PrimerNombre}</td>
                        <td>{(nomina.Trabajador.SalarioIntegral) ? "SI" : "NO"}</td>
                        <td>{nomina.Trabajador.SegundoApellido}</td>
                        <td>{nomina.Trabajador.SubTipoTrabajador}</td>
                        <td>{nomina.Trabajador.Sueldo}</td>
                        <td>{nomina.Trabajador.TipoContrato}</td>
                        <td>{nomina.Trabajador.TipoDocumento}</td>
                        <td>{nomina.Trabajador.TipoTrabajador}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
	);
}
export default NominaElectronicaList;
