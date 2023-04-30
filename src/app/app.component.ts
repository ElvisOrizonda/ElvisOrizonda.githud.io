import { Component } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  open:boolean = true

  constructor(private router:Router)
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event : any) =>{

      if(event.url === '/' || event.url==='/#Inicio' || event.url==='/#Nosotros' || event.url==='/#Servicios' || event.url==='/login' || event.url==='/registrar-usuario') {
        this.open = false;
      } else{
        this.open=true
      }
    })

  }
}


