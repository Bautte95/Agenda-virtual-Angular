import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from 'src/app/Services/agenda.service.service';

@Component({
  selector: 'app-seccion-perfil',
  templateUrl: './seccion-perfil.component.html',
  styleUrls: ['./seccion-perfil.component.css']
})
export class SeccionPerfilComponent implements OnInit {

  perfil: any = [];

  constructor(private servicioHttp: AgendaServiceService) { }

  ngOnInit(): void {
    this.servicioHttp.getDatos().subscribe(
      {
        next: res => {
          this.perfil = res;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

}
