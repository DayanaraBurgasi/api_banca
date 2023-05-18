"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const cuenta_1 = __importDefault(require("./cuenta"));
const transferencia_1 = __importDefault(require("./transferencia"));
const contacto_1 = __importDefault(require("./contacto"));
const cajero_1 = require("./cajero");
exports.routes = {
    cuentaRouter: cuenta_1.default,
    TransferenciaRouter: transferencia_1.default,
    contactoRouter: contacto_1.default,
    cajeroRouter: cajero_1.cajeroRouter
};
