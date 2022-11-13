import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaServiceService } from 'src/app/Services/agenda.service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  datosPerfil: any ={
    id: 0,
    nit: '',
    nombre: '',
    direccion: '',
    celular: '',
    telefono: '',
    correo: ''
  }

  constructor(private activatedRoute:ActivatedRoute, private agendaServices: AgendaServiceService, private router:Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params["id"]){
      this.agendaServices.getDato(params["id"]).subscribe(
        {
          next: res => {
            this.datosPerfil = res;
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }
  }

  updatePerfil(){
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.agendaServices.updatePerfil(this.datosPerfil.id,this.datosPerfil).subscribe(
          {
            next: res => {
              console.log(res);
              this.router.navigate(['/agenda-virtual/perfil']);
              Swal.fire(
                '¡Cambios guardados con éxito!',
                'El perfil fue actualizado',
                'success'
              )
            },
            error: err => {
              console.log(err);
            }
          }
        )
      }
    })
  }

}
