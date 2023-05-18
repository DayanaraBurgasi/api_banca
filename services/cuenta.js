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
exports.CuentaService = void 0;
const models_1 = require("../models");
const validations_1 = require("../validations");
exports.CuentaService = {
    crear: (entidad) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = validations_1.cuentaValidation.validacionCrear.validate(entidad);
        if (error) {
            throw new Error(error.message);
        }
        const cuentaNueva = yield models_1.CuentaModel.create({
            numero: Date.now().toString(),
            titular: entidad.titular,
            usuarioId: entidad.usuarioId,
        });
        return cuentaNueva;
    }),
    listarCuenta: (usuarioId) => __awaiter(void 0, void 0, void 0, function* () {
        const cuenta = yield models_1.CuentaModel.find({ usuarioId });
        return cuenta;
    })
};
