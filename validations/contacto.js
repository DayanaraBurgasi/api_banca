"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joiMensajes_1 = require("./joiMensajes");
exports.contactoValidation = {
    validacionRegistro: joi_1.default.object({
        nombreCompleto: joi_1.default.string().required(),
        numeroCuenta: joi_1.default.string().required(),
        usuarioId: joi_1.default.string().required(),
    }).messages(joiMensajes_1.mensajesDeError),
};
