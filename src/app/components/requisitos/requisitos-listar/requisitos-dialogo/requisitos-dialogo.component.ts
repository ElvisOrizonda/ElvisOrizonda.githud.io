import { Component, OnInit } from '@angular/core';
import { RequisitoService } from 'src/app/service/requisito.service';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-requisitos-dialogo',
  templateUrl: './requisitos-dialogo.component.html',
  styleUrls: ['./requisitos-dialogo.component.css']
})
export class RequisitosDialogoComponent implements OnInit{
    constructor(private rS: RequisitoService,
      private dialogRef: MatDialogRef<RequisitosDialogoComponent>) { }
    ngOnInit(): void {}
      confirmar(estado: boolean){
        this.rS.setConfirmDelete(estado);
        this.dialogRef.close();
      }

  }

