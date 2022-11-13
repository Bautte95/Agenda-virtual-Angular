import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AgendaServiceService } from 'src/app/Services/agenda.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any = [];
  constructor(private servicioHttp: AgendaServiceService) { }

  ngOnInit(): void {
    this.servicioHttp.getDatos().subscribe(
      {
        next: res => {
          this.usuario = res;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
}
