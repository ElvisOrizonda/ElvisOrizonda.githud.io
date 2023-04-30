import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-empresa-dialogo',
  templateUrl: './empresa-dialogo.component.html',
  styleUrls: ['./empresa-dialogo.component.css']
})

export class EmpresaDialogoComponent implements OnInit {
  constructor(private empresaService: EmpresaService,
    private dialogRef: MatDialogRef<EmpresaDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.empresaService.SetConfirmDelete(estado);
      this.dialogRef.close();
    }

}
