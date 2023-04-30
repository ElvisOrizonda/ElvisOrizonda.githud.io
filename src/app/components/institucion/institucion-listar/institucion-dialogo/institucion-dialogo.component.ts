import { Component, OnInit } from '@angular/core';
import { InstitucionService } from 'src/app/service/institucion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-institucion-dialogo',
  templateUrl: './institucion-dialogo.component.html',
  styleUrls: ['./institucion-dialogo.component.css']
})

export class InstitucionDialogoComponent implements OnInit {
  constructor(private institucionService: InstitucionService,
    private dialogRef: MatDialogRef<InstitucionDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.institucionService.SetConfirmDelete(estado);
      this.dialogRef.close();
    }

}
