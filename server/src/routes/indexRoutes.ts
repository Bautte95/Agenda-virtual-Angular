import { Router } from "express";
import { appController } from "../controllers/appController";
import { indexController } from "../controllers/indexController";

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.confing();
    }

    confing(): void{
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;