import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from 'src/app/models/servicios';
import { AgendaServiceService } from 'src/app/Services/agenda.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  datoServicio:any = [];

  constructor(private activatedRoute:ActivatedRoute, private agendaServices: AgendaServiceService, private router:Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params["id"]){
      this.agendaServices.getServicio(params["id"]).subscribe(
        {
          next: res => {
            this.datoServicio = res;
            console.log(res)
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }
  }

  updateSolicitud(){
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
        this.agendaServices.updateServicio(this.datoServicio.id,this.datoServicio).subscribe(
          {
            next: res => {
              console.log(res);
              this.router.navigate(['/agenda-virtual/servicios']);
              Swal.fire(
                '¡Cambios guardados con éxito!',
                'La solicitud fue actualizado',
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
