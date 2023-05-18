"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferenciaService = void 0;
const models_1 = require("../models");
const validations_1 = require("../validations");
exports.transferenciaService = {
    transferencia: (entidad) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = validations_1.transferenciaValidation.validacionTrasnferir.validate({ numero: entidad.numero, monto: entidad.monto, nombreBeneficiario: entidad.nombreBeneficiario, cuentaBeneficiario: entidad.cuentaBeneficiario, saldoDisponible: entidad.saldoDisponible, email: entidad.email });
        if (error) {
            throw new Error(error.message);
        }
        if (entidad.saldoDisponible < entidad.monto) {
            throw new Error('Lo sentimos, no cuentas con dinero suficiente para realizar la transferencia!');
        }
        else {
            const cuentaBenef = yield models_1.CuentaModel.findOne({ numero: entidad.cuentaBeneficiario });
            const cuentaPrincipal = yield models_1.CuentaModel.findOne({ numero: entidad.numero });
            const now = Date.now();
            if (cuentaBenef) {
                const nuevoSaldo = (cuentaBenef.saldo) + (entidad.monto);
                const nuevoMovimiento = {
                    numero: entidad.numero,
                    monto: entidad.monto,
                    tipo: 'deposito',
                    fecha: new Date(now),
                    nombreBeneficiario: entidad.nombreBeneficiario,
                    cuentaBeneficiario: entidad.cuentaBeneficiario,
                    saldoDisponible: entidad.saldoDisponible,
                    descripcion: entidad.descripcion,
                    email: entidad.email
                };
                yield models_1.CuentaModel.findByIdAndUpdate(cuentaBenef.id, { saldo: nuevoSaldo }, { new: true });
                cuentaBenef.movimientos.push(nuevoMovimiento);
                yield cuentaBenef.save();
            }
            if (cuentaPrincipal) {
                const nuevoSaldoPrin = cuentaPrincipal.saldo - (entidad.monto);
                const nuevoMovimientoTrans = {
                    numero: entidad.numero,
                    monto: entidad.monto,
                    tipo: 'transferencia',
                    fecha: new Date(now),
                    nombreBeneficiario: entidad.nombreBeneficiario,
                    cuentaBeneficiario: entidad.cuentaBeneficiario,
                    saldoDisponible: entidad.saldoDisponible,
                    descripcion: entidad.descripcion,
                    email: entidad.email
                };
                yield models_1.CuentaModel.findByIdAndUpdate(cuentaPrincipal.id, { saldo: nuevoSaldoPrin }, { new: true });
                cuentaPrincipal.movimientos.push(nuevoMovimientoTrans);
                yield cuentaPrincipal.save();
                return nuevoMovimientoTrans;
            }
            else {
                throw new Error('Lo sentimos a ocurrido un problema!');
            }
        }
    }),
    validarCuenta: (numero) => __awaiter(void 0, void 0, void 0, function* () {
        const exiteCuenta = yield models_1.CuentaModel.find({ numero });
        if (exiteCuenta.length > 0) {
            const nombreBeneficiario = exiteCuenta[0].titular;
            return nombreBeneficiario;
        }
        else {
            throw new Error('La cuenta no existe');
        }
    })
};
