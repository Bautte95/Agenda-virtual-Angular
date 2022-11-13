"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
class AppRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.confing();
    }
    confing() {
        this.router.get('/', appController_1.appController.perfilUser);
        this.router.get('/perfil/editar-perfil/:id', appController_1.appController.datoPerfil);
        this.router.get('/servicios', appController_1.appController.listServicios);
        this.router.get('/servicios/editar/:id', appController_1.appController.getServicio);
        this.router.post('/', appController_1.appController.create);
        this.router.put('/perfil/editar-perfil/:id', appController_1.appController.updatePerfil);
        this.router.put('/servicios/editar/:id', appController_1.appController.updateServio);
        this.router.delete('/servicios/:id', appController_1.appController.delete);
    }
}
const indexRoutes = new AppRoutes();
exports.default = indexRoutes.router;
