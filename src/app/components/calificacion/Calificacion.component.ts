import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Calificacion',
  templateUrl: './Calificacion.component.html',
  styleUrls: ['./Calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  constructor(public route:ActivatedRoute) {

  }
  ngOnInit(): void {

  }

}
