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
exports.appController = void 0;
const database_1 = __importDefault(require("../database"));
class AppController {
    perfilUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nit = '8000876998';
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE nit = 8000876998');
            res.json(usuario[0][0]);
        });
    }
    datoPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            res.json(usuario[0][0]);
        });
    }
    updatePerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Servicio editado' });
        });
    }
    listServicios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT * FROM servicios');
            res.json(servicios[0]);
        });
    }
    getServicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicio = yield database_1.default.query('SELECT * FROM servicios WHERE id = ?', [id]);
            res.json(servicio[0][0]);
        });
    }
    updateServio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE servicios set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Servicio editado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO servicios set ?', [req.body]);
            res.json({ texto: 'Servicio creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM servicios WHERE id = ?', [id]);
            res.json({ message: 'Servicio eliminado' });
        });
    }
}
exports.appController = new AppController();
