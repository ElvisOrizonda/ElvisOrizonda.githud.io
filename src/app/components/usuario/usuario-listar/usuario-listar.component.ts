import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  lista:Usuario[]=[]
  dataSource: MatTableDataSource<Usuario> =new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[]=['codigo','dni','usuario','nombre','email','contraseña','tipo','key','accion01','accion02']
  constructor(private uS: UsuarioService, private dialog: MatDialog){

  }
  ngOnInit(): void {
    this.uS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }
}
