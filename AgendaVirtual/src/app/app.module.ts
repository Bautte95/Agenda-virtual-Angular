import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SeccionBienvenidaComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-bienvenida/seccion-bienvenida.component';
import { SeccionPerfilComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-perfil/seccion-perfil.component';
import { SeccionServiciosComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-servicios/seccion-servicios.component';
import { SeccionHistorialComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-historial/seccion-historial.component';
import { SeccionOpcionesComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-opciones/seccion-opciones.component';
import { ComponenteSolicitudComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-servicios/componente-solicitud/componente-solicitud.component';
import { CrearSolicitudComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-servicios/crear-solicitud/crear-solicitud.component';
import { EditarPerfilComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-perfil/editar-perfil/editar-perfil.component';
import { AgendaServiceService } from './Services/agenda.service.service';
import { EditarSolicitudComponent } from './Componentes/interfazClientes/componentesSecciones/seccion-servicios/editar-solicitud/editar-solicitud.component';


const appRutas:Routes=[
  {path:'',redirectTo:'/agenda-virtual', pathMatch: 'full'},
  {path:'agenda-virtual',component:SeccionBienvenidaComponent},
  {path:'agenda-virtual/perfil',component:SeccionPerfilComponent},
  {path:'agenda-virtual/perfil/editar-perfil/:id',component:EditarPerfilComponent},
  {path:'agenda-virtual/historial',component:SeccionHistorialComponent},
  {path:'agenda-virtual/opciones',component:SeccionOpcionesComponent},
  {path:'agenda-virtual/servicios',component:SeccionServiciosComponent},
  {path:'agenda-virtual/servicios/crear-solicitud',component:CrearSolicitudComponent},
  {path:'agenda-virtual/servicios/editar/:id',component:EditarSolicitudComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SeccionBienvenidaComponent,
    SeccionPerfilComponent,
    SeccionServiciosComponent,
    SeccionHistorialComponent,
    SeccionOpcionesComponent,
    ComponenteSolicitudComponent,
    CrearSolicitudComponent,
    EditarPerfilComponent,
    EditarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRutas),
    HttpClientModule,
    FormsModule,
  ],
  providers: [AgendaServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
