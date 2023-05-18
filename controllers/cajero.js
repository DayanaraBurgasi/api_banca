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
exports.cajeroController = void 0;
const error_1 = require("../error");
const services_1 = require("../services");
exports.cajeroController = {
    depositar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield services_1.CajeroService.depositar(req.body);
            res.json(data);
        }
        catch (error) {
            return (0, error_1.manejarError)(res, error);
        }
    })
};
