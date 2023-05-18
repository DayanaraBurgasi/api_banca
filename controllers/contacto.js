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
exports.ContactoController = void 0;
const error_1 = require("../error");
const services_1 = require("../services");
exports.ContactoController = {
    registrar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { usuarioId } = req.query;
            const data = yield services_1.ContactoService.registrar(Object.assign(Object.assign({}, req.body), { usuarioId }));
            return res.json(data);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    }),
    listar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contactos = yield services_1.ContactoService.listar(req.query.usuarioId);
            return res.json(contactos);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    }),
    eliminar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contacto = yield services_1.ContactoService.eliminar(req.query.usuarioId, req.params.contactoId);
            return res.json(contacto);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    }),
};
