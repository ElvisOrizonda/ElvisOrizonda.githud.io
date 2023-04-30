import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-dialogo',
  templateUrl: './usuario-dialogo.component.html',
  styleUrls: ['./usuario-dialogo.component.css']
})
export class UsuarioDialogoComponent implements OnInit {
  constructor(private uS: UsuarioService,
    private dialogRef: MatDialogRef<UsuarioDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.uS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
