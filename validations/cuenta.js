"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joiMensajes_1 = require("./joiMensajes");
exports.cuentaValidation = {
    validacionCrear: joi_1.default.object({
        titular: joi_1.default
            .string()
            .required(),
        usuarioId: joi_1.default
            .string()
            .required(),
    })
        .messages(joiMensajes_1.mensajesDeError)
};
