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
exports.ContactoService = void 0;
const models_1 = require("../models");
const validations_1 = require("../validations");
exports.ContactoService = {
    registrar: (entidad) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = validations_1.contactoValidation.validacionRegistro.validate(entidad);
        if (error) {
            throw new Error(error.message);
        }
        const contactoNuevo = yield models_1.ContactoModel.create({
            nombreCompleto: entidad.nombreCompleto,
            numeroCuenta: entidad.numeroCuenta,
            usuarioId: entidad.usuarioId,
        });
        return contactoNuevo;
    }),
    listar: (usuarioId) => __awaiter(void 0, void 0, void 0, function* () {
        const contactos = yield models_1.ContactoModel.find({ usuarioId });
        return contactos;
    }),
    eliminar: (usuarioId, contactoId) => __awaiter(void 0, void 0, void 0, function* () {
        const contacto = yield models_1.ContactoModel.findOne({
            usuarioId,
            _id: contactoId,
        });
        if (!contacto) {
            throw new Error("El contacto no existe!");
        }
        yield models_1.ContactoModel.findByIdAndDelete(contactoId);
        return contacto;
    }),
};
