"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferenciaRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
// import { verificarToken } from '../middlewares';
exports.TransferenciaRouter = (0, express_1.Router)();
// cuentaRouter.use(verificarToken);
exports.TransferenciaRouter.put('/validar-cuenta', controllers_1.TransferenciaController.validaCuenta);
exports.TransferenciaRouter.post('/', controllers_1.TransferenciaController.transferencia);
exports.default = exports.TransferenciaRouter;
