import { Request, Response } from "express";
import pool from "../database";

class AppController{

    public async perfilUser (req:Request, res:Response){
        const nit = '8000876998';
        const usuario = await pool.query('SELECT * FROM usuarios WHERE nit = 8000876998');
        res.json(usuario[0][0])
    }

    public async datoPerfil (req:Request, res:Response){
        const {id} = req.params;
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        res.json(usuario[0][0])
    }

    public async updatePerfil (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Servicio editado'});
    }

    public async listServicios (req:Request, res: Response){
        const servicios = await pool.query('SELECT * FROM servicios');
        res.json(servicios[0])
    }

    public async getServicio (req:Request, res:Response){
        const {id} = req.params;
        const servicio = await pool.query('SELECT * FROM servicios WHERE id = ?', [id]);
        res.json(servicio[0][0])
    }

    public async updateServio (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE servicios set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Servicio editado'});
    }

    public async create (req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO servicios set ?', [req.body]);
        res.json({texto: 'Servicio creado'});
    }

    public async delete (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM servicios WHERE id = ?', [id]);
        res.json({message: 'Servicio eliminado'})
    }

}

export const appController = new AppController();