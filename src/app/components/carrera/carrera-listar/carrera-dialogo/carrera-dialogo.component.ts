import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/service/carrera.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-carrera-dialogo',
  templateUrl: './carrera-dialogo.component.html',
  styleUrls: ['./carrera-dialogo.component.css']
})
export class CarreraDialogoComponent implements OnInit {
  constructor(private aS: CarreraService,
    private dialogRef: MatDialogRef<CarreraDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }



}
