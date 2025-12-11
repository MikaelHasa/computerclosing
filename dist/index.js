"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World from TypeScript Express!');
});
app.get('/shutdown', (req, res) => {
    res.send('Shutting down the server...');
});
app.get('/sleep', (req, res) => {
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
