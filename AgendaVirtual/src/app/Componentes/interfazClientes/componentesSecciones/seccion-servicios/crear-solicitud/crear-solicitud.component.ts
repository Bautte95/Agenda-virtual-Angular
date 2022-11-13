import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { AgendaServiceService } from 'src/app/Services/agenda.service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  servicio: Servicios = {
    tipo_servicio: '',
    fecha_solicitada: '',
    hora_solicitada: '',
    tipo_vehiculo: '',
    placa: '',
    conductor: '',
    numero_ident: '',
    numero_contacto: '',
    observaciones: '',
    estado: 'pendiente'
  };
  constructor(private servicioHttp: AgendaServiceService, private router: Router ) { }

  ngOnInit(): void {
  }

  enviarSolicitud(){
    Swal.fire({
      title: '¿Deseas enviar esta solicitud?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar!',
      confirmButtonText: 'Sí, enviar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioHttp.crearSolicitud(this.servicio).subscribe(
          {
            next: res => {
              Swal.fire(
                'Solicitud enviada con éxito!',
                'Pronto recibirás confirmación del agendamiento',
                'success'
              )
              this.router.navigate(['/agenda-virtual/servicios']);
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
