import { Component , OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Requisito } from 'src/app/model/requisito';
import { RequisitoService } from 'src/app/service/requisito.service';
import { RequisitosDialogoComponent } from './requisitos-dialogo/requisitos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-requisitos-listar',
  templateUrl: './requisitos-listar.component.html',
  styleUrls: ['./requisitos-listar.component.css']
})
export class RequisitosListarComponent implements OnInit
{

  lista: Requisito[] = []
  dataSource: MatTableDataSource<Requisito> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'requisito', 'accion01','acciones2']

  constructor(private rS: RequisitoService , private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.rS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(RequisitosDialogoComponent);
  }
  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.rS.list().subscribe(data => {
        this.rS.setList(data);
      })
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}


