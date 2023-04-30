import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/model/calificacion';
import { MatTableDataSource } from '@angular/material/table'
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatDialog } from '@angular/material/dialog';
import { CalificacionDialogoComponent } from './Calificacion-dialogo/Calificacion-dialogo.component';
@Component({
  selector: 'app-Calificacion-listar',
  templateUrl: './Calificacion-listar.component.html',
  styleUrls: ['./Calificacion-listar.component.css']
})

export class CalificacionListarComponent implements OnInit {

  lista: Calificacion[] = []
  dataSource: MatTableDataSource<Calificacion> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'Estudiante', 'Calificacion','acciones1','acciones2']

  constructor(private aS: CalificacionService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(CalificacionDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
