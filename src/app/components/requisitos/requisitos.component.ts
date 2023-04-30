import { Component , OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css']
})
export class RequisitosComponent implements OnInit {

  constructor(public route:ActivatedRoute) {

  }
  ngOnInit(): void {

  }
}


