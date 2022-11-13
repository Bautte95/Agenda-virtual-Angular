
import { Component, OnInit} from '@angular/core';
import { AgendaServiceService } from 'src/app/Services/agenda.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-componente-solicitud',
  templateUrl: './componente-solicitud.component.html',
  styleUrls: ['./componente-solicitud.component.css'],
})
export class ComponenteSolicitudComponent implements OnInit {


  verDetalle:number=0;

  constructor(private servicioHttp: AgendaServiceService) { }

  servicios: any=[];

  ngOnInit(): void {
    this.mostrarServicios();
    }

  mostrarDetalle(id:number){
    this.verDetalle = id;
  }

  mostrarServicios(){
    this.servicioHttp.getServicios().subscribe(
      {
        next: res => {
          this.servicios = res;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  eliminarServicio(id:number){
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioHttp.eliminarServicio(id).subscribe(
          {
            next: res => {
              Swal.fire(
                '¡Eliminado!',
                'La solicitud fue eliminada',
                'success'
              )
              this.mostrarServicios();
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