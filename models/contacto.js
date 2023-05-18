"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoModel = void 0;
const mongoose_1 = require("mongoose");
const contactoSchema = new mongoose_1.Schema({
    nombreCompleto: String,
    numeroCuenta: String,
    usuarioId: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
});
exports.ContactoModel = (0, mongoose_1.model)("contactos", contactoSchema);
