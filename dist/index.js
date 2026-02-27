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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cmdfunctions_1 = require("./cmdfunctions");
const win32_1 = __importDefault(require("path/win32"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use('/static', express_1.default.static(win32_1.default.join(__dirname, 'build/static')));
app.use('/', express_1.default.static(win32_1.default.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.send('Hello World from TypeScript Express!');
});
app.get('/shutdown', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shutdownData = req.headers['user-agent'];
    console.log(shutdownData);
    if (shutdownData && shutdownData.includes('Mozilla/5.0 (Android 15; Mobile; rv:148.0) Gecko/148.0 Firefox/148.0')) {
        (0, cmdfunctions_1.shutdown)();
    }
}));
app.get('/sleep', (req, res) => {
    const sleepData = req.headers['user-agent'];
    console.log(sleepData);
    if (sleepData && sleepData.includes('Mozilla/5.0 (Android 15; Mobile; rv:148.0) Gecko/147.0 Firefox/147.0')) {
        (0, cmdfunctions_1.eep)();
    }
});
app.get(/(.*)/, function (req, res) {
    res.sendFile('index.html', { root: win32_1.default.join(__dirname, 'build'), headers: { "Content-Type": 'text/html' } });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
