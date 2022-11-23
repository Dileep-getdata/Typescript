"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const todosList_1 = __importDefault(require("./router/todosList"));
const app = express();
app.use(express.json());
app.use(todosList_1.default);
app.listen(3000);
