import { Component, OnInit } from '@angular/core';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-Calificacion-dialogo',
  templateUrl: './Calificacion-dialogo.component.html',
  styleUrls: ['./Calificacion-dialogo.component.css']
})
export class CalificacionDialogoComponent implements OnInit {
  constructor(private aS: CalificacionService,
    private dialogRef: MatDialogRef<CalificacionDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
