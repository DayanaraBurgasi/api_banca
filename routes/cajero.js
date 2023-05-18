"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajeroRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.cajeroRouter = (0, express_1.Router)();
exports.cajeroRouter.put("/deposito", controllers_1.cajeroController.depositar);
