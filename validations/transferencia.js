"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferenciaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joiMensajes_1 = require("./joiMensajes");
exports.transferenciaValidation = {
    validacionTrasnferir: joi_1.default.object({
        numero: joi_1.default.string().required(),
        monto: joi_1.default.number().required(),
        nombreBeneficiario: joi_1.default.string().required(),
        cuentaBeneficiario: joi_1.default.string().required(),
        saldoDisponible: joi_1.default.number().required(),
        descripcion: joi_1.default.string(),
        email: joi_1.default.string().email(),
    }).messages(joiMensajes_1.mensajesDeError),
};
