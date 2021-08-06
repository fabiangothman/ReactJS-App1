import { INominaElectronica } from "./INominaElectronica";

export const createNominaElectronicaObjectFromXML = (nomina: any): INominaElectronica => {    
    return {
        CodigoQR: tryAssignString(nomina.NominaIndividual.CodigoQR[0]),
        ComprobanteTotal: tryAssignNumber(nomina.NominaIndividual.ComprobanteTotal[0]),
        Deducciones: {
            AFC: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].AFC[0]),
            Anticipos: {
                Anticipo: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Anticipos[0].Anticipo[0]),
            },
            Cooperativa: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Cooperativa[0]),
            Deuda: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Deuda[0]),
            Educacion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Educacion[0]),
            EmbargoFiscal: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].EmbargoFiscal[0]),
            FondoPension: {
                Deduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoPension[0].data.Deduccion),
                Porcentaje: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoPension[0].data.Porcentaje)
            },
            FondoSP: {
                Deduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoSP[0].data.Deduccion),
                DeduccionSub: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoSP[0].data.DeduccionSub),
                Porcentaje: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoSP[0].data.Porcentaje),
                PorcentajeSub: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].FondoSP[0].data.PorcentajeSub),
            },
            Libranzas: {
                Libranza: {
                    Deduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Libranzas[0].Libranza[0].data.Deduccion),
                    Descripcion: tryAssignString(nomina.NominaIndividual.Deducciones[0].Libranzas[0].Libranza[0].data.Descripcion),
                }
            },
            OtrasDeducciones: {
                OtraDeduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].OtrasDeducciones[0].OtraDeduccion[0])
            },
            PagosTerceros: {
                PagoTercero: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].PagosTerceros[0].PagoTercero[0]),
            },
            PensionVoluntaria: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].PensionVoluntaria[0]),
            PlanComplementarios: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].PlanComplementarios[0]),
            Reintegro: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Reintegro[0]),
            RetencionFuente: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].RetencionFuente[0]),
            Salud: {
                Deduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Salud[0].data.Deduccion),
                Porcentaje: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Salud[0].data.Porcentaje)
            },
            Sanciones: {
                Sancion: {
                    SancionPriv: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Sanciones[0].Sancion[0].data.SancionPriv),
                    SancionPublic: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Sanciones[0].Sancion[0].data.SancionPublic)
                }
            },
            Sindicatos: {
                Sindicato: {
                    Deduccion: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Sindicatos[0].Sindicato[0].data.Deduccion),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Deducciones[0].Sindicatos[0].Sindicato[0].data.Porcentaje)
                }
            }
        },
        DeduccionesTotal: tryAssignNumber(nomina.NominaIndividual.DeduccionesTotal[0]),
        Devengados: {
            Anticipos: {
                Anticipo: tryAssignString(nomina.NominaIndividual.Devengados[0].Anticipos[0].Anticipo[0]),
            },
            ApoyoSost: tryAssignNumber(nomina.NominaIndividual.Devengados[0].ApoyoSost[0]),
            Auxilios: {
                Auxilio: {
                    AuxilioNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Auxilios[0].Auxilio[0].data.AuxilioNS),
                    AuxilioS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Auxilios[0].Auxilio[0].data.AuxilioS)
                }
            },
            Basico: {
                DiasTrabajados: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Basico[0].data.DiasTrabajados),
                SueldoTrabajado: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Basico[0].data.SueldoTrabajado)
            },
            BonifRetiro: tryAssignNumber(nomina.NominaIndividual.Devengados[0].BonifRetiro[0]),
            Bonificaciones: {
                Bonificacion: {
                    BonificacionNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Bonificaciones[0].Bonificacion[0].data.BonificacionNS),
                    BonificacionS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Bonificaciones[0].Bonificacion[0].data.BonificacionS)
                }
            },
            BonoEPCTVs: {
                BonoEPCTV: {
                    PagoAlimentacionNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].BonoEPCTVs[0].BonoEPCTV[0].data.PagoAlimentacionNS),
                    PagoAlimentacionS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].BonoEPCTVs[0].BonoEPCTV[0].data.PagoAlimentacionS),
                    PagoNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].BonoEPCTVs[0].BonoEPCTV[0].data.PagoNS),
                    PagoS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].BonoEPCTVs[0].BonoEPCTV[0].data.PagoS)
                }            
            },
            Cesantias: {
                Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Cesantias[0].data.Pago),
                PagoIntereses: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Cesantias[0].data.PagoIntereses),
                Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Cesantias[0].data.Porcentaje)
            },
            Comisiones: {
                Comision: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Comisiones[0].Comision[0])
            },
            Compensaciones: {
                Compensacion: {
                    CompensacionE: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Compensaciones[0].Compensacion[0].data.CompensacionE),
                    CompensacionO: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Compensaciones[0].Compensacion[0].data.CompensacionO)
                }
            },
            Dotacion: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Dotacion[0]),
            HEDDFs: {
                HEDDF: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDDFs[0].HEDDF[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HEDDFs[0].HEDDF[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HEDDFs[0].HEDDF[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDDFs[0].HEDDF[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDDFs[0].HEDDF[0].data.Porcentaje)
                }
            },
            HEDs: {
                HED: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDs[0].HED[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HEDs[0].HED[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HEDs[0].HED[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDs[0].HED[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HEDs[0].HED[0].data.Porcentaje)
                }
            },
            HENDFs: {
                HENDF: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENDFs[0].HENDF[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HENDFs[0].HENDF[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HENDFs[0].HENDF[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENDFs[0].HENDF[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENDFs[0].HENDF[0].data.Porcentaje)
                }
            },
            HENs: {
                HEN: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENs[0].HEN[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HENs[0].HEN[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HENs[0].HEN[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENs[0].HEN[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HENs[0].HEN[0].data.Porcentaje)
                }
            },
            HRDDFs: {
                HRDDF: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRDDFs[0].HRDDF[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRDDFs[0].HRDDF[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRDDFs[0].HRDDF[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRDDFs[0].HRDDF[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRDDFs[0].HRDDF[0].data.Porcentaje)
                }
            },
            HRNDFs: {
                HRNDF: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNDFs[0].HRNDF[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRNDFs[0].HRNDF[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRNDFs[0].HRNDF[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNDFs[0].HRNDF[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNDFs[0].HRNDF[0].data.Porcentaje)
                }
            },
            HRNs: {
                HRN: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNs[0].HRN[0].data.Cantidad),
                    HoraFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRNs[0].HRN[0].data.HoraFin),
                    HoraInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HRNs[0].HRN[0].data.HoraInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNs[0].HRN[0].data.Pago),
                    Porcentaje: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HRNs[0].HRN[0].data.Porcentaje)
                }
            },
            HuelgasLegales: {
                HuelgaLegal: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].HuelgasLegales[0].HuelgaLegal[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].HuelgasLegales[0].HuelgaLegal[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].HuelgasLegales[0].HuelgaLegal[0].data.FechaInicio)
                }
            },
            Incapacidades: {
                Incapacidad: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Incapacidades[0].Incapacidad[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].Incapacidades[0].Incapacidad[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].Incapacidades[0].Incapacidad[0].data.FechaInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Incapacidades[0].Incapacidad[0].data.Pago),
                    Tipo: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Incapacidades[0].Incapacidad[0].data.Tipo)
                }
            },
            Indemnizacion: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Indemnizacion[0]),
            Licencias: {
                LicenciaMP: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaMP[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaMP[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaMP[0].data.FechaInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaMP[0].data.Pago)
                },
                LicenciaNR: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaNR[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaNR[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaNR[0].data.FechaInicio)
                },
                LicenciaR: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaR[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaR[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaR[0].data.FechaInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Licencias[0].LicenciaR[0].data.Pago)
                }
            },
            OtrosConceptos: {
                OtroConcepto: {
                    ConceptoNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].OtrosConceptos[0].OtroConcepto[0].data.ConceptoNS),
                    ConceptoS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].OtrosConceptos[0].OtroConcepto[0].data.ConceptoS),
                    DescripcionConcepto: tryAssignString(nomina.NominaIndividual.Devengados[0].OtrosConceptos[0].OtroConcepto[0].data.DescripcionConcepto)
                }
            },
            PagosTerceros: {
                PagoTercero: tryAssignNumber(nomina.NominaIndividual.Devengados[0].PagosTerceros[0].PagoTercero[0])
            },
            Primas: {
                Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Primas[0].data.Cantidad),
                Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Primas[0].data.Pago),
                PagoNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Primas[0].data.PagoNS)
            },
            Reintegro: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Reintegro[0]),
            Teletrabajo: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Teletrabajo[0]),
            Transporte: {
                AuxilioTransporte: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Transporte[0].data.AuxilioTransporte),
                ViaticoManutAlojNS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Transporte[0].data.ViaticoManutAlojNS),
                ViaticoManutAlojS: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Transporte[0].data.ViaticoManutAlojS)
            },
            Vacaciones: {
                VacacionesCompensadas: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesCompensadas[0].data.Cantidad),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesCompensadas[0].data.Pago)
                },
                VacacionesComunes: {
                    Cantidad: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesComunes[0].data.Cantidad),
                    FechaFin: tryAssignDate(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesComunes[0].data.FechaFin),
                    FechaInicio: tryAssignDate(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesComunes[0].data.FechaInicio),
                    Pago: tryAssignNumber(nomina.NominaIndividual.Devengados[0].Vacaciones[0].VacacionesComunes[0].data.Pago)
                }
            }
        },
        DevengadosTotal: tryAssignNumber(nomina.NominaIndividual.DevengadosTotal[0]),
        Empleador: {
            DV: tryAssignNumber(nomina.NominaIndividual.Empleador[0].data.DV),
            DepartamentoEstado: tryAssignNumber(nomina.NominaIndividual.Empleador[0].data.DepartamentoEstado),
            Direccion: tryAssignString(nomina.NominaIndividual.Empleador[0].data.Direccion),
            MunicipioCiudad: tryAssignNumber(nomina.NominaIndividual.Empleador[0].data.MunicipioCiudad),
            NIT: tryAssignNumber(nomina.NominaIndividual.Empleador[0].data.NIT),
            OtrosNombres: tryAssignString(nomina.NominaIndividual.Empleador[0].data.OtrosNombres),
            Pais: tryAssignString(nomina.NominaIndividual.Empleador[0].data.Pais),
            PrimerApellido: tryAssignString(nomina.NominaIndividual.Empleador[0].data.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.NominaIndividual.Empleador[0].data.PrimerNombre),
            RazonSocial: tryAssignString(nomina.NominaIndividual.Empleador[0].data.RazonSocial),
            SegundoApellido: tryAssignString(nomina.NominaIndividual.Empleador[0].data.SegundoApellido)
        },
        FechasPagos: {
            FechaPago: tryAssignDate(nomina.NominaIndividual.FechasPagos[0].FechaPago[0])
        },
        InformacionGeneral: {
            Ambiente: tryAssignNumber(nomina.NominaIndividual.InformacionGeneral[0].data.Ambiente),
            CUNE: tryAssignString(nomina.NominaIndividual.InformacionGeneral[0].data.CUNE),
            EncripCUNE: tryAssignString(nomina.NominaIndividual.InformacionGeneral[0].data.EncripCUNE),
            FechaGen: tryAssignDate(nomina.NominaIndividual.InformacionGeneral[0].data.FechaGen),
            HoraGen: tryAssignString(nomina.NominaIndividual.InformacionGeneral[0].data.HoraGen),
            PeriodoNomina: tryAssignNumber(nomina.NominaIndividual.InformacionGeneral[0].data.PeriodoNomina),
            TRM: tryAssignNumber(nomina.NominaIndividual.InformacionGeneral[0].data.TRM),
            TipoMoneda: tryAssignString(nomina.NominaIndividual.InformacionGeneral[0].data.TipoMoneda),
            TipoXML: tryAssignNumber(nomina.NominaIndividual.InformacionGeneral[0].data.TipoXML),
            Version: tryAssignString(nomina.NominaIndividual.InformacionGeneral[0].data.Version)
        },
        LugarGeneracionXML: {
            DepartamentoEstado: tryAssignNumber(nomina.NominaIndividual.LugarGeneracionXML[0].data.DepartamentoEstado),
            Idioma: tryAssignString(nomina.NominaIndividual.LugarGeneracionXML[0].data.Idioma),
            MunicipioCiudad: tryAssignNumber(nomina.NominaIndividual.LugarGeneracionXML[0].data.MunicipioCiudad),
            Pais: tryAssignString(nomina.NominaIndividual.LugarGeneracionXML[0].data.Pais)
        },
        Notas: tryAssignString(nomina.NominaIndividual.Notas[0]),
        Novedad: {
            CUNENov: tryAssignString(nomina.NominaIndividual.Novedad[0].data.CUNENov)
        },
        NumeroSecuenciaXML: {
            CodigoTrabajador: tryAssignNumber(nomina.NominaIndividual.NumeroSecuenciaXML[0].data.CodigoTrabajador),
            Consecutivo: tryAssignNumber(nomina.NominaIndividual.NumeroSecuenciaXML[0].data.Consecutivo),
            Numero: tryAssignString(nomina.NominaIndividual.NumeroSecuenciaXML[0].data.Numero),
            Prefijo: tryAssignString(nomina.NominaIndividual.NumeroSecuenciaXML[0].data.Prefijo)
        },
        Pago: {
            Banco: tryAssignString(nomina.NominaIndividual.Pago[0].data.Banco),
            Forma: tryAssignNumber(nomina.NominaIndividual.Pago[0].data.Forma),
            Metodo: tryAssignNumber(nomina.NominaIndividual.Pago[0].data.Metodo),
            NumeroCuenta: tryAssignString(nomina.NominaIndividual.Pago[0].data.NumeroCuenta),
            TipoCuenta: tryAssignString(nomina.NominaIndividual.Pago[0].data.TipoCuenta)
        },
        Periodo: {
            FechaGen: tryAssignDate(nomina.NominaIndividual.Periodo[0].data.FechaGen),
            FechaIngreso: tryAssignDate(nomina.NominaIndividual.Periodo[0].data.FechaIngreso),
            FechaLiquidacionFin: tryAssignDate(nomina.NominaIndividual.Periodo[0].data.FechaLiquidacionFin),
            FechaLiquidacionInicio: tryAssignDate(nomina.NominaIndividual.Periodo[0].data.FechaLiquidacionInicio),
            FechaRetiro: tryAssignDate(nomina.NominaIndividual.Periodo[0].data.FechaRetiro),
            TiempoLaborado: tryAssignNumber(nomina.NominaIndividual.Periodo[0].data.TiempoLaborado)
        },
        ProveedorXML: {
            DV: tryAssignNumber(nomina.NominaIndividual.ProveedorXML[0].data.DV),
            NIT: tryAssignNumber(nomina.NominaIndividual.ProveedorXML[0].data.NIT),
            OtrosNombres: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.OtrosNombres),
            PrimerApellido: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.PrimerNombre),
            RazonSocial: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.RazonSocial),
            SegundoApellido: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.SegundoApellido),
            SoftwareID: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.SoftwareID),
            SoftwareSC: tryAssignString(nomina.NominaIndividual.ProveedorXML[0].data.SoftwareSC)
        },
        Redondeo: tryAssignNumber(nomina.NominaIndividual.Redondeo[0]),
        Trabajador: {
            AltoRiesgoPension: tryAssignBoolean(nomina.NominaIndividual.Trabajador[0].data.AltoRiesgoPension),
            CodigoTrabajador: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.CodigoTrabajador),
            LugarTrabajoDepartamentoEstado: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.LugarTrabajoDepartamentoEstado),
            LugarTrabajoDireccion: tryAssignString(nomina.NominaIndividual.Trabajador[0].data.LugarTrabajoDireccion),
            LugarTrabajoMunicipioCiudad: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.LugarTrabajoMunicipioCiudad),
            LugarTrabajoPais: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.LugarTrabajoPais),
            NumeroDocumento: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.NumeroDocumento),
            OtrosNombres: tryAssignString(nomina.NominaIndividual.Trabajador[0].data.OtrosNombres),
            PrimerApellido: tryAssignString(nomina.NominaIndividual.Trabajador[0].data.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.NominaIndividual.Trabajador[0].data.PrimerNombre),
            SalarioIntegral: tryAssignBoolean(nomina.NominaIndividual.Trabajador[0].data.SalarioIntegral),
            SegundoApellido: tryAssignString(nomina.NominaIndividual.Trabajador[0].data.SegundoApellido),
            SubTipoTrabajador: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.SubTipoTrabajador),
            Sueldo: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.Sueldo),
            TipoContrato: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.TipoContrato),
            TipoDocumento: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.TipoDocumento),
            TipoTrabajador: tryAssignNumber(nomina.NominaIndividual.Trabajador[0].data.TipoTrabajador)
        }
    }
}


export const createNominaElectronicaObject = (nomina: any): INominaElectronica => {
    return {
        CodigoQR: tryAssignString(nomina.CodigoQR),
        ComprobanteTotal: tryAssignNumber(nomina.ComprobanteTotal),
        Deducciones: {
            AFC: tryAssignNumber(nomina.Deducciones.AFC),
            Anticipos: {
                Anticipo: tryAssignNumber(nomina.Deducciones.Anticipos.Anticipo),
            },
            Cooperativa: tryAssignNumber(nomina.Deducciones.Cooperativa),
            Deuda: tryAssignNumber(nomina.Deducciones.Deuda),
            Educacion: tryAssignNumber(nomina.Deducciones.Educacion),
            EmbargoFiscal: tryAssignNumber(nomina.Deducciones.EmbargoFiscal),
            FondoPension: {
                Deduccion: tryAssignNumber(nomina.Deducciones.FondoPension.Deduccion),
                Porcentaje: tryAssignNumber(nomina.Deducciones.FondoPension.Porcentaje),
            },
            FondoSP: {
                Deduccion: tryAssignNumber(nomina.Deducciones.FondoSP.Deduccion),
                DeduccionSub: tryAssignNumber(nomina.Deducciones.FondoSP.DeduccionSub),
                Porcentaje: tryAssignNumber(nomina.Deducciones.FondoSP.Porcentaje),
                PorcentajeSub: tryAssignNumber(nomina.Deducciones.FondoSP.PorcentajeSub),
            },
            Libranzas: {
                Libranza: {
                    Deduccion: tryAssignNumber(nomina.Deducciones.Libranzas.Libranza.Deduccion),
                    Descripcion: tryAssignString(nomina.Deducciones.Libranzas.Libranza.Descripcion),
                }
            },
            OtrasDeducciones: {
                OtraDeduccion: tryAssignNumber(nomina.Deducciones.OtrasDeducciones.OtraDeduccion),
            },
            PagosTerceros: {
                PagoTercero: tryAssignNumber(nomina.Deducciones.PagosTerceros.PagoTercero),
            },
            PensionVoluntaria: tryAssignNumber(nomina.Deducciones.PensionVoluntaria),
            PlanComplementarios: tryAssignNumber(nomina.Deducciones.PlanComplementarios),
            Reintegro: tryAssignNumber(nomina.Deducciones.Reintegro),
            RetencionFuente: tryAssignNumber(nomina.Deducciones.RetencionFuente),
            Salud: {
                Deduccion: tryAssignNumber(nomina.Deducciones.Salud.Deduccion),
                Porcentaje: tryAssignNumber(nomina.Deducciones.Salud.Porcentaje),
            },
            Sanciones: {
                Sancion: {
                    SancionPriv: tryAssignNumber(nomina.Deducciones.Sanciones.Sancion.SancionPriv),
                    SancionPublic: tryAssignNumber(nomina.Deducciones.Sanciones.Sancion.SancionPublic),
                }
            },
            Sindicatos: {
                Sindicato: {
                    Deduccion: tryAssignNumber(nomina.Deducciones.Sindicatos.Sindicato.Deduccion),
                    Porcentaje: tryAssignNumber(nomina.Deducciones.Sindicatos.Sindicato.Porcentaje),
                }
            }
        },
        DeduccionesTotal: tryAssignNumber(nomina.DeduccionesTotal),
        Devengados: {
            Anticipos: {
                Anticipo: tryAssignString(nomina.Devengados.Anticipos.Anticipo),
            },
            ApoyoSost: tryAssignNumber(nomina.Devengados.ApoyoSost),
            Auxilios: {
                Auxilio: {
                    AuxilioNS: tryAssignNumber(nomina.Devengados.Auxilios.Auxilio.AuxilioNS),
                    AuxilioS: tryAssignNumber(nomina.Devengados.Auxilios.Auxilio.AuxilioS),
                }
            },
            Basico: {
                DiasTrabajados: tryAssignNumber(nomina.Devengados.Basico.DiasTrabajados),
                SueldoTrabajado: tryAssignNumber(nomina.Devengados.Basico.SueldoTrabajado),
            },
            BonifRetiro: tryAssignNumber(nomina.Devengados.BonifRetiro),
            Bonificaciones: {
                Bonificacion: {
                    BonificacionNS: tryAssignNumber(nomina.Devengados.Bonificaciones.Bonificacion.BonificacionNS),
                    BonificacionS: tryAssignNumber(nomina.Devengados.Bonificaciones.Bonificacion.BonificacionS),
                }
            },
            BonoEPCTVs: {
                BonoEPCTV: {
                    PagoAlimentacionNS: tryAssignNumber(nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoAlimentacionNS),
                    PagoAlimentacionS: tryAssignNumber(nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoAlimentacionS),
                    PagoNS: tryAssignNumber(nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoNS),
                    PagoS: tryAssignNumber(nomina.Devengados.BonoEPCTVs.BonoEPCTV.PagoS),
                }            
            },
            Cesantias: {
                Pago: tryAssignNumber(nomina.Devengados.Cesantias.Pago),
                PagoIntereses: tryAssignNumber(nomina.Devengados.Cesantias.PagoIntereses),
                Porcentaje: tryAssignNumber(nomina.Devengados.Cesantias.Porcentaje),
            },
            Comisiones: {
                Comision: tryAssignNumber(nomina.Devengados.Comisiones.Comision),
            },
            Compensaciones: {
                Compensacion: {
                    CompensacionE: tryAssignNumber(nomina.Devengados.Compensaciones.Compensacion.CompensacionE),
                    CompensacionO: tryAssignNumber(nomina.Devengados.Compensaciones.Compensacion.CompensacionO),
                }
            },
            Dotacion: tryAssignNumber(nomina.Devengados.Dotacion),
            HEDDFs: {
                HEDDF: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HEDDFs.HEDDF.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HEDDFs.HEDDF.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HEDDFs.HEDDF.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HEDDFs.HEDDF.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HEDDFs.HEDDF.Porcentaje),
                }
            },
            HEDs: {
                HED: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HEDs.HED.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HEDs.HED.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HEDs.HED.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HEDs.HED.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HEDs.HED.Porcentaje),
                }
            },
            HENDFs: {
                HENDF: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HENDFs.HENDF.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HENDFs.HENDF.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HENDFs.HENDF.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HENDFs.HENDF.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HENDFs.HENDF.Porcentaje),
                }
            },
            HENs: {
                HEN: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HENs.HEN.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HENs.HEN.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HENs.HEN.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HENs.HEN.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HENs.HEN.Porcentaje),
                }
            },
            HRDDFs: {
                HRDDF: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HRDDFs.HRDDF.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HRDDFs.HRDDF.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HRDDFs.HRDDF.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HRDDFs.HRDDF.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HRDDFs.HRDDF.Porcentaje),
                }
            },
            HRNDFs: {
                HRNDF: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HRNDFs.HRNDF.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HRNDFs.HRNDF.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HRNDFs.HRNDF.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HRNDFs.HRNDF.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HRNDFs.HRNDF.Porcentaje),
                }
            },
            HRNs: {
                HRN: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HRNs.HRN.Cantidad),
                    HoraFin: tryAssignDate(nomina.Devengados.HRNs.HRN.HoraFin),
                    HoraInicio: tryAssignDate(nomina.Devengados.HRNs.HRN.HoraInicio),
                    Pago: tryAssignNumber(nomina.Devengados.HRNs.HRN.Pago),
                    Porcentaje: tryAssignNumber(nomina.Devengados.HRNs.HRN.Porcentaje),
                }
            },
            HuelgasLegales: {
                HuelgaLegal: {
                    Cantidad: tryAssignNumber(nomina.Devengados.HuelgasLegales.HuelgaLegal.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.HuelgasLegales.HuelgaLegal.FechaInicio),
                }
            },
            Incapacidades: {
                Incapacidad: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Incapacidades.Incapacidad.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.Incapacidades.Incapacidad.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.Incapacidades.Incapacidad.FechaInicio),
                    Pago: tryAssignNumber(nomina.Devengados.Incapacidades.Incapacidad.Pago),
                    Tipo: tryAssignNumber(nomina.Devengados.Incapacidades.Incapacidad.Tipo),
                }
            },
            Indemnizacion: tryAssignNumber(nomina.Devengados.Indemnizacion),
            Licencias: {
                LicenciaMP: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Licencias.LicenciaMP.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.Licencias.LicenciaMP.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.Licencias.LicenciaMP.FechaInicio),
                    Pago: tryAssignNumber(nomina.Devengados.Licencias.LicenciaMP.Pago),
                },
                LicenciaNR: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Licencias.LicenciaNR.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.Licencias.LicenciaNR.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.Licencias.LicenciaNR.FechaInicio),
                },
                LicenciaR: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Licencias.LicenciaR.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.Licencias.LicenciaR.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.Licencias.LicenciaR.FechaInicio),
                    Pago: tryAssignNumber(nomina.Devengados.Licencias.LicenciaR.Pago),
                }
            },
            OtrosConceptos: {
                OtroConcepto: {
                    ConceptoNS: tryAssignNumber(nomina.Devengados.OtrosConceptos.OtroConcepto.ConceptoNS),
                    ConceptoS: tryAssignNumber(nomina.Devengados.OtrosConceptos.OtroConcepto.ConceptoS),
                    DescripcionConcepto: tryAssignString(nomina.Devengados.OtrosConceptos.OtroConcepto.DescripcionConcepto),
                }
            },
            PagosTerceros: {
                PagoTercero: tryAssignNumber(nomina.Devengados.PagosTerceros.PagoTercero),
            },
            Primas: {
                Cantidad: tryAssignNumber(nomina.Devengados.Primas.Cantidad),
                Pago: tryAssignNumber(nomina.Devengados.Primas.Pago),
                PagoNS: tryAssignNumber(nomina.Devengados.Primas.PagoNS),
            },
            Reintegro: tryAssignNumber(nomina.Devengados.Reintegro),
            Teletrabajo: tryAssignNumber(nomina.Devengados.Teletrabajo),
            Transporte: {
                AuxilioTransporte: tryAssignNumber(nomina.Devengados.Transporte.AuxilioTransporte),
                ViaticoManutAlojNS: tryAssignNumber(nomina.Devengados.Transporte.ViaticoManutAlojNS),
                ViaticoManutAlojS: tryAssignNumber(nomina.Devengados.Transporte.ViaticoManutAlojS),
            },
            Vacaciones: {
                VacacionesCompensadas: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Vacaciones.VacacionesCompensadas.Cantidad),
                    Pago: tryAssignNumber(nomina.Devengados.Vacaciones.VacacionesCompensadas.Pago),
                },
                VacacionesComunes: {
                    Cantidad: tryAssignNumber(nomina.Devengados.Vacaciones.VacacionesComunes.Cantidad),
                    FechaFin: tryAssignDate(nomina.Devengados.Vacaciones.VacacionesComunes.FechaFin),
                    FechaInicio: tryAssignDate(nomina.Devengados.Vacaciones.VacacionesComunes.FechaInicio),
                    Pago: tryAssignNumber(nomina.Devengados.Vacaciones.VacacionesComunes.Pago),
                }
            }
        },
        DevengadosTotal: tryAssignNumber(nomina.DevengadosTotal),
        Empleador: {
            DV: tryAssignNumber(nomina.Empleador.DV),
            DepartamentoEstado: tryAssignNumber(nomina.Empleador.DepartamentoEstado),
            Direccion: tryAssignString(nomina.Empleador.Direccion),
            MunicipioCiudad: tryAssignNumber(nomina.Empleador.MunicipioCiudad),
            NIT: tryAssignNumber(nomina.Empleador.NIT),
            OtrosNombres: tryAssignString(nomina.Empleador.OtrosNombres),
            Pais: tryAssignString(nomina.Empleador.Pais),
            PrimerApellido: tryAssignString(nomina.Empleador.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.Empleador.PrimerNombre),
            RazonSocial: tryAssignString(nomina.Empleador.RazonSocial),
            SegundoApellido: tryAssignString(nomina.Empleador.SegundoApellido),
        },
        FechasPagos: {
            FechaPago: tryAssignDate(nomina.FechasPagos.FechaPago),
        },
        InformacionGeneral: {
            Ambiente: tryAssignNumber(nomina.InformacionGeneral.Ambiente),
            CUNE: tryAssignString(nomina.InformacionGeneral.CUNE),
            EncripCUNE: tryAssignString(nomina.InformacionGeneral.EncripCUNE),
            FechaGen: tryAssignDate(nomina.InformacionGeneral.FechaGen),
            HoraGen: tryAssignString(nomina.InformacionGeneral.HoraGen),
            PeriodoNomina: tryAssignNumber(nomina.InformacionGeneral.PeriodoNomina),
            TRM: tryAssignNumber(nomina.InformacionGeneral.TRM),
            TipoMoneda: tryAssignString(nomina.InformacionGeneral.TipoMoneda),
            TipoXML: tryAssignNumber(nomina.InformacionGeneral.TipoXML),
            Version: tryAssignString(nomina.InformacionGeneral.Version),
        },
        LugarGeneracionXML: {
            DepartamentoEstado: tryAssignNumber(nomina.LugarGeneracionXML.DepartamentoEstado),
            Idioma: tryAssignString(nomina.LugarGeneracionXML.Idioma),
            MunicipioCiudad: tryAssignNumber(nomina.LugarGeneracionXML.MunicipioCiudad),
            Pais: tryAssignString(nomina.LugarGeneracionXML.Pais),
        },
        Notas: tryAssignString(nomina.LugarGeneracionXML.Notas),
        Novedad: {
            CUNENov: tryAssignString(nomina.Novedad.CUNENov),
        },
        NumeroSecuenciaXML: {
            CodigoTrabajador: tryAssignNumber(nomina.NumeroSecuenciaXML.CodigoTrabajador),
            Consecutivo: tryAssignNumber(nomina.NumeroSecuenciaXML.Consecutivo),
            Numero: tryAssignString(nomina.NumeroSecuenciaXML.Numero),
            Prefijo: tryAssignString(nomina.NumeroSecuenciaXML.Prefijo),
        },
        Pago: {
            Banco: tryAssignString(nomina.Pago.Banco),
            Forma: tryAssignNumber(nomina.Pago.Forma),
            Metodo: tryAssignNumber(nomina.Pago.Metodo),
            NumeroCuenta: tryAssignString(nomina.Pago.NumeroCuenta),
            TipoCuenta: tryAssignString(nomina.Pago.TipoCuenta),
        },
        Periodo: {
            FechaGen: tryAssignDate(nomina.Periodo.FechaGen),
            FechaIngreso: tryAssignDate(nomina.Periodo.FechaIngreso),
            FechaLiquidacionFin: tryAssignDate(nomina.Periodo.FechaLiquidacionFin),
            FechaLiquidacionInicio: tryAssignDate(nomina.Periodo.FechaLiquidacionInicio),
            FechaRetiro: tryAssignDate(nomina.Periodo.FechaRetiro),
            TiempoLaborado: tryAssignNumber(nomina.Periodo.TiempoLaborado),
        },
        ProveedorXML: {
            DV: tryAssignNumber(nomina.ProveedorXML.DV),
            NIT: tryAssignNumber(nomina.ProveedorXML.NIT),
            OtrosNombres: tryAssignString(nomina.ProveedorXML.OtrosNombres),
            PrimerApellido: tryAssignString(nomina.ProveedorXML.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.ProveedorXML.PrimerNombre),
            RazonSocial: tryAssignString(nomina.ProveedorXML.RazonSocial),
            SegundoApellido: tryAssignString(nomina.ProveedorXML.SegundoApellido),
            SoftwareID: tryAssignString(nomina.ProveedorXML.SoftwareID),
            SoftwareSC: tryAssignString(nomina.ProveedorXML.SoftwareSC),
        },
        Redondeo: tryAssignNumber(nomina.Redondeo),
        Trabajador: {
            AltoRiesgoPension: tryAssignBoolean(nomina.Trabajador.AltoRiesgoPension),
            CodigoTrabajador: tryAssignNumber(nomina.Trabajador.CodigoTrabajador),
            LugarTrabajoDepartamentoEstado: tryAssignNumber(nomina.Trabajador.LugarTrabajoDepartamentoEstado),
            LugarTrabajoDireccion: tryAssignString(nomina.Trabajador.LugarTrabajoDireccion),
            LugarTrabajoMunicipioCiudad: tryAssignNumber(nomina.Trabajador.LugarTrabajoMunicipioCiudad),
            LugarTrabajoPais: tryAssignNumber(nomina.Trabajador.LugarTrabajoPais),
            NumeroDocumento: tryAssignNumber(nomina.Trabajador.NumeroDocumento),
            OtrosNombres: tryAssignString(nomina.Trabajador.OtrosNombres),
            PrimerApellido: tryAssignString(nomina.Trabajador.PrimerApellido),
            PrimerNombre: tryAssignString(nomina.Trabajador.PrimerNombre),
            SalarioIntegral: tryAssignBoolean(nomina.Trabajador.SalarioIntegral),
            SegundoApellido: tryAssignString(nomina.Trabajador.SegundoApellido),
            SubTipoTrabajador: tryAssignNumber(nomina.Trabajador.SubTipoTrabajador),
            Sueldo: tryAssignNumber(nomina.Trabajador.Sueldo),
            TipoContrato: tryAssignNumber(nomina.Trabajador.TipoContrato),
            TipoDocumento: tryAssignNumber(nomina.Trabajador.TipoDocumento),
            TipoTrabajador: tryAssignNumber(nomina.Trabajador.TipoTrabajador),
        }
    }
}


const tryAssignNumber = (value: string|undefined): number => (value === undefined) ? 0 : +(value);
const tryAssignString = (value: string|undefined): string => (value === undefined) ? "" : value;
const tryAssignDate = (value: string|undefined): Date => (value === undefined) ? new Date() : new Date(value);
const tryAssignBoolean = (value: string|undefined): boolean => (value === undefined) ? false : (value === "true");
