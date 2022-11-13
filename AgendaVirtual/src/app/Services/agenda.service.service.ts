import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Perfil } from '../models/perfil';
import { Servicios } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get(`${this.API_URI}/agenda-virtual`);
  }

  getDato(id:string){
    return this.http.get(`${this.API_URI}/agenda-virtual/perfil/editar-perfil/${id}`);
  }

  updatePerfil(id:number|string, nuevoDato:Perfil){
    return this.http.put(`${this.API_URI}/agenda-virtual/perfil/editar-perfil/${id}`, nuevoDato);
  }

  getServicios(){
    return this.http.get(`${this.API_URI}/agenda-virtual/servicios`);
  }

  getServicio(id:string){
    return this.http.get(`${this.API_URI}/agenda-virtual/servicios/editar/${id}`);
  }

  updateServicio(id:number|string, nuevoDato:any){
    return this.http.put(`${this.API_URI}/agenda-virtual/servicios/editar/${id}`, nuevoDato);
  }

  crearSolicitud(servicio:Servicios){
    return this.http.post(`${this.API_URI}/agenda-virtual`, servicio)
  }

  eliminarServicio(id:number){
    return this.http.delete(`${this.API_URI}/agenda-virtual/servicios/${id}`)
  }
}
