"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaModel = void 0;
const mongoose_1 = require("mongoose");
const cuentaSchema = new mongoose_1.Schema({
    numero: String,
    titular: String,
    usuarioId: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    tipo: {
        type: String,
        enum: ['ahorro', 'corriente'],
        default: 'ahorro',
    },
    saldo: {
        type: Number,
        default: 0
    },
    movimientos: [{
            numero: String,
            monto: Number,
            tipo: {
                type: String,
                enum: ['deposito', 'retiro', 'transferencia']
            },
            fecha: {
                type: Date,
                default: Date.now()
            },
            nombreBeneficiario: String,
            cuentaBeneficiario: String,
            saldoDisponible: Number,
            descripcion: String,
            email: String
        }],
    activa: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
});
exports.CuentaModel = (0, mongoose_1.model)('cuentas', cuentaSchema);
