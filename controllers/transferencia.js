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
exports.TransferenciaController = void 0;
const error_1 = require("../error");
const services_1 = require("../services");
exports.TransferenciaController = {
    validaCuenta: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { numero } = req.body;
            const nombreBeneficiario = yield services_1.transferenciaService.validarCuenta(numero);
            return res.json(nombreBeneficiario);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    }),
    transferencia: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { usuarioId } = req.query;
            const nuevaTransferencia = yield services_1.transferenciaService.transferencia(Object.assign(Object.assign({}, req.body), { usuarioId }));
            return res.json(nuevaTransferencia);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    })
};
