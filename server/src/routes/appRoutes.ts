import { Router } from "express";
import { appController } from "../controllers/appController";

class AppRoutes{
    public router: Router = Router();

    constructor(){
        this.confing();
    }

    confing(): void{
        this.router.get('/', appController.perfilUser);
        this.router.get('/perfil/editar-perfil/:id', appController.datoPerfil);
        this.router.get('/servicios', appController.listServicios);
        this.router.get('/servicios/editar/:id', appController.getServicio);
        this.router.post('/', appController.create);
        this.router.put('/perfil/editar-perfil/:id', appController.updatePerfil);
        this.router.put('/servicios/editar/:id' , appController.updateServio);
        this.router.delete('/servicios/:id', appController.delete);
    }
}

const indexRoutes = new AppRoutes();

export default indexRoutes.router;