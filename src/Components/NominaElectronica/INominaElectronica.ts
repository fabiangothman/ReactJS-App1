export interface INominaElectronica {
    CodigoQR: string,
    ComprobanteTotal: number,
    Deducciones: {
        AFC: number,
        Anticipos: {
            Anticipo: number,
        },
        Cooperativa: number,
        Deuda: number,
        Educacion: number,
        EmbargoFiscal: number,
        FondoPension: {
            Deduccion: number,
            Porcentaje: number
        },
        FondoSP: {
            Deduccion: number,
            DeduccionSub: number,
            Porcentaje: number,
            PorcentajeSub: number
        },
        Libranzas: {
            Libranza: {
                Deduccion: number,
                Descripcion: string,
            }
        },
        OtrasDeducciones: {
            OtraDeduccion: number,
        },
        PagosTerceros: {
            PagoTercero: number,
        },
        PensionVoluntaria: number,
        PlanComplementarios: number,
        Reintegro: number,
        RetencionFuente: number,
        Salud: {
            Deduccion: number,
            Porcentaje: number
        },
        Sanciones: {
            Sancion: {
                SancionPriv: number,
                SancionPublic: number
            }
        },
        Sindicatos: {
            Sindicato: {
                Deduccion: number,
                Porcentaje: number
            }
        }
    },
    DeduccionesTotal: number,
    Devengados: {
        Anticipos: {
            Anticipo: string,
        },
        ApoyoSost: number,
        Auxilios: {
            Auxilio: {
                AuxilioNS: number,
                AuxilioS: number
            }
        },
        Basico: {
            DiasTrabajados: number,
            SueldoTrabajado: number
        },
        BonifRetiro: number,
        Bonificaciones: {
            Bonificacion: {
                BonificacionNS: number,
                BonificacionS: number
            }
        },
        BonoEPCTVs: {
            BonoEPCTV: {
                PagoAlimentacionNS: number,
                PagoAlimentacionS: number,
                PagoNS: number,
                PagoS: number
            }            
        },
        Cesantias: {
            Pago: number,
            PagoIntereses: number,
            Porcentaje: number,
        },
        Comisiones: {
            Comision: number
        },
        Compensaciones: {
            Compensacion: {
                CompensacionE: number,
                CompensacionO: number
            }
        },
        Dotacion: number,
        HEDDFs: {
            HEDDF: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HEDs: {
            HED: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HENDFs: {
            HENDF: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HENs: {
            HEN: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HRDDFs: {
            HRDDF: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HRNDFs: {
            HRNDF: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HRNs: {
            HRN: {
                Cantidad: number,
                HoraFin: Date,
                HoraInicio: Date,
                Pago: number,
                Porcentaje: number,
            }
        },
        HuelgasLegales: {
            HuelgaLegal: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date
            }
        },
        Incapacidades: {
            Incapacidad: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date,
                Pago: number,
                Tipo: number
            }
        },
        Indemnizacion: number,
        Licencias: {
            LicenciaMP: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date,
                Pago: number
            },
            LicenciaNR: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date
            },
            LicenciaR: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date,
                Pago: number
            }
        },
        OtrosConceptos: {
            OtroConcepto: {
                ConceptoNS: number,
                ConceptoS: number,
                DescripcionConcepto: string
            }
        },
        PagosTerceros: {
            PagoTercero: number
        },
        Primas: {
            Cantidad: number,
            Pago: number,
            PagoNS: number
        },
        Reintegro: number,
        Teletrabajo: number,
        Transporte: {
            AuxilioTransporte: number,
            ViaticoManutAlojNS: number,
            ViaticoManutAlojS: number
        },
        Vacaciones: {
            VacacionesCompensadas: {
                Cantidad: number,
                Pago: number
            },
            VacacionesComunes: {
                Cantidad: number,
                FechaFin: Date,
                FechaInicio: Date,
                Pago: number
            }
        }
    },
    DevengadosTotal: number,
    Empleador: {
        DV: number,
        DepartamentoEstado: number,
        Direccion: string,
        MunicipioCiudad: number,
        NIT: number,
        OtrosNombres: string,
        Pais: string,
        PrimerApellido: string,
        PrimerNombre: string,
        RazonSocial: string,
        SegundoApellido: string
    },
    FechasPagos: {
        FechaPago: Date
    },
    InformacionGeneral: {
        Ambiente: number,
        CUNE: string,
        EncripCUNE: string,
        FechaGen: Date,
        HoraGen: string,
        PeriodoNomina: number,
        TRM: number,
        TipoMoneda: string,
        TipoXML: number,
        Version: string
    },
    LugarGeneracionXML: {
        DepartamentoEstado: number,
        Idioma: string,
        MunicipioCiudad: number,
        Pais: string
    },
    Notas: string,
    Novedad: {
        CUNENov: string,
    },
    NumeroSecuenciaXML: {
        CodigoTrabajador: number,
        Consecutivo: number,
        Numero: string,
        Prefijo: string
    },
    Pago: {
        Banco: string,
        Forma: number,
        Metodo: number,
        NumeroCuenta: string,
        TipoCuenta: string
    },
    Periodo: {
        FechaGen: Date,
        FechaIngreso: Date,
        FechaLiquidacionFin: Date,
        FechaLiquidacionInicio: Date,
        FechaRetiro: Date,
        TiempoLaborado: number
    },
    ProveedorXML: {
        DV: number,
        NIT: number,
        OtrosNombres: string,
        PrimerApellido: string,
        PrimerNombre: string,
        RazonSocial: string,
        SegundoApellido: string,
        SoftwareID: string,
        SoftwareSC: string
    },
    Redondeo: number,
    Trabajador: {
        AltoRiesgoPension: boolean,
        CodigoTrabajador: number,
        LugarTrabajoDepartamentoEstado: number,
        LugarTrabajoDireccion: string,
        LugarTrabajoMunicipioCiudad: number,
        LugarTrabajoPais: number,
        NumeroDocumento: number,
        OtrosNombres: string,
        PrimerApellido: string,
        PrimerNombre: string,
        SalarioIntegral: boolean,
        SegundoApellido: string,
        SubTipoTrabajador: number,
        Sueldo: number,
        TipoContrato: number,
        TipoDocumento: number,
        TipoTrabajador: number
    }
}

/*  Initialization of the "INominaElectronica" object */
export const INominaElectronicaInit: INominaElectronica = {
    CodigoQR: "",
    ComprobanteTotal: 0,
    Deducciones: {
        AFC: 0,
        Anticipos: {
            Anticipo: 0,
        },
        Cooperativa: 0,
        Deuda: 0,
        Educacion: 0,
        EmbargoFiscal: 0,
        FondoPension: {
            Deduccion: 0,
            Porcentaje: 0
        },
        FondoSP: {
            Deduccion: 0,
            DeduccionSub: 0,
            Porcentaje: 0,
            PorcentajeSub: 0
        },
        Libranzas: {
            Libranza: {
                Deduccion: 0,
                Descripcion: "",
            }
        },
        OtrasDeducciones: {
            OtraDeduccion: 0,
        },
        PagosTerceros: {
            PagoTercero: 0,
        },
        PensionVoluntaria: 0,
        PlanComplementarios: 0,
        Reintegro: 0,
        RetencionFuente: 0,
        Salud: {
            Deduccion: 0,
            Porcentaje: 0
        },
        Sanciones: {
            Sancion: {
                SancionPriv: 0,
                SancionPublic: 0
            }
        },
        Sindicatos: {
            Sindicato: {
                Deduccion: 0,
                Porcentaje: 0
            }
        }
    },
    DeduccionesTotal: 0,
    Devengados: {
        Anticipos: {
            Anticipo: "",
        },
        ApoyoSost: 0,
        Auxilios: {
            Auxilio: {
                AuxilioNS: 0,
                AuxilioS: 0
            }
        },
        Basico: {
            DiasTrabajados: 0,
            SueldoTrabajado: 0
        },
        BonifRetiro: 0,
        Bonificaciones: {
            Bonificacion: {
                BonificacionNS: 0,
                BonificacionS: 0
            }
        },
        BonoEPCTVs: {
            BonoEPCTV: {
                PagoAlimentacionNS: 0,
                PagoAlimentacionS: 0,
                PagoNS: 0,
                PagoS: 0
            }            
        },
        Cesantias: {
            Pago: 0,
            PagoIntereses: 0,
            Porcentaje: 0,
        },
        Comisiones: {
            Comision: 0
        },
        Compensaciones: {
            Compensacion: {
                CompensacionE: 0,
                CompensacionO: 0
            }
        },
        Dotacion: 0,
        HEDDFs: {
            HEDDF: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HEDs: {
            HED: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HENDFs: {
            HENDF: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HENs: {
            HEN: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HRDDFs: {
            HRDDF: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HRNDFs: {
            HRNDF: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HRNs: {
            HRN: {
                Cantidad: 0,
                HoraFin: new Date(),
                HoraInicio: new Date(),
                Pago: 0,
                Porcentaje: 0,
            }
        },
        HuelgasLegales: {
            HuelgaLegal: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date()
            }
        },
        Incapacidades: {
            Incapacidad: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date(),
                Pago: 0,
                Tipo: 0
            }
        },
        Indemnizacion: 0,
        Licencias: {
            LicenciaMP: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date(),
                Pago: 0
            },
            LicenciaNR: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date()
            },
            LicenciaR: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date(),
                Pago: 0
            }
        },
        OtrosConceptos: {
            OtroConcepto: {
                ConceptoNS: 0,
                ConceptoS: 0,
                DescripcionConcepto: ""
            }
        },
        PagosTerceros: {
            PagoTercero: 0
        },
        Primas: {
            Cantidad: 0,
            Pago: 0,
            PagoNS: 0
        },
        Reintegro: 0,
        Teletrabajo: 0,
        Transporte: {
            AuxilioTransporte: 0,
            ViaticoManutAlojNS: 0,
            ViaticoManutAlojS: 0
        },
        Vacaciones: {
            VacacionesCompensadas: {
                Cantidad: 0,
                Pago: 0
            },
            VacacionesComunes: {
                Cantidad: 0,
                FechaFin: new Date(),
                FechaInicio: new Date(),
                Pago: 0
            }
        }
    },
    DevengadosTotal: 0,
    Empleador: {
        DV: 0,
        DepartamentoEstado: 0,
        Direccion: "",
        MunicipioCiudad: 0,
        NIT: 0,
        OtrosNombres: "",
        Pais: "",
        PrimerApellido: "",
        PrimerNombre: "",
        RazonSocial: "",
        SegundoApellido: ""
    },
    FechasPagos: {
        FechaPago: new Date()
    },
    InformacionGeneral: {
        Ambiente: 0,
        CUNE: "",
        EncripCUNE: "",
        FechaGen: new Date(),
        HoraGen: "00:00:00",
        PeriodoNomina: 0,
        TRM: 0,
        TipoMoneda: "",
        TipoXML: 0,
        Version: ""
    },
    LugarGeneracionXML: {
        DepartamentoEstado: 0,
        Idioma: "",
        MunicipioCiudad: 0,
        Pais: ""
    },
    Notas: "",
    Novedad: {
        CUNENov: "",
    },
    NumeroSecuenciaXML: {
        CodigoTrabajador: 0,
        Consecutivo: 0,
        Numero: "",
        Prefijo: ""
    },
    Pago: {
        Banco: "",
        Forma: 0,
        Metodo: 0,
        NumeroCuenta: "",
        TipoCuenta: ""
    },
    Periodo: {
        FechaGen: new Date(),
        FechaIngreso: new Date(),
        FechaLiquidacionFin: new Date(),
        FechaLiquidacionInicio: new Date(),
        FechaRetiro: new Date(),
        TiempoLaborado: 0
    },
    ProveedorXML: {
        DV: 0,
        NIT: 0,
        OtrosNombres: "",
        PrimerApellido: "",
        PrimerNombre: "",
        RazonSocial: "",
        SegundoApellido: "",
        SoftwareID: "",
        SoftwareSC: ""
    },
    Redondeo: 0,
    Trabajador: {
        AltoRiesgoPension: false,
        CodigoTrabajador: 0,
        LugarTrabajoDepartamentoEstado: 0,
        LugarTrabajoDireccion: "",
        LugarTrabajoMunicipioCiudad: 0,
        LugarTrabajoPais: 0,
        NumeroDocumento: 0,
        OtrosNombres: "",
        PrimerApellido: "",
        PrimerNombre: "",
        SalarioIntegral: false,
        SegundoApellido: "",
        SubTipoTrabajador: 0,
        Sueldo: 0,
        TipoContrato: 0,
        TipoDocumento: 0,
        TipoTrabajador: 0
    }
}