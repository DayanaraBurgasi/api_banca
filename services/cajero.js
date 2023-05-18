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
exports.CajeroService = void 0;
const models_1 = require("../models");
exports.CajeroService = {
    depositar: (entidad) => __awaiter(void 0, void 0, void 0, function* () {
        const existeCuenta = yield models_1.CuentaModel.findOne({ numero: entidad.numeroCuenta });
        if (!existeCuenta) {
            throw new Error('La cuenta no existe!');
        }
        if (!entidad.cantidad && entidad.cantidad <= 0) {
            throw new Error('El monto debe ser mayor a 0!');
        }
        existeCuenta.saldo += entidad.cantidad;
        existeCuenta.movimientos.push({
            fecha: new Date(),
            monto: entidad.cantidad,
            tipo: 'deposito',
            saldoDisponible: existeCuenta.saldo
        });
        yield existeCuenta.save();
        return entidad;
    })
};
