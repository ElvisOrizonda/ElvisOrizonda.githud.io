import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Institucion_Educativa } from 'src/app/model/institucion';
import { InstitucionService } from 'src/app/service/institucion.service'
import { InstitucionDialogoComponent } from './institucion-dialogo/institucion-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-institucion-listar',
  templateUrl: './institucion-listar.component.html',
  styleUrls: ['./institucion-listar.component.css']
})
export class InstitucionListarComponent implements OnInit{

  dataSourceInstitucion: MatTableDataSource<Institucion_Educativa>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumnsInstitucion: string[] = ['id', 'nombre', 'accion01', 'accion02']

  constructor(private institucionService: InstitucionService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.institucionService.List().subscribe(data=> {
      this.dataSourceInstitucion = new MatTableDataSource(data);
    })
    this.institucionService.GetList().subscribe(data=> {
      this.dataSourceInstitucion = new MatTableDataSource(data)
    })
    this.institucionService.GetConfirmDelete().subscribe(data=>{
      data== true? this.eliminar(this.idMayor) : false;
    })
  }

  filtrar(e:any){
    this.dataSourceInstitucion.filter = e.target.value.trim();
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(InstitucionDialogoComponent);
  }
  eliminar(id: number) {
    this.institucionService.Delete(id).subscribe(() => {
      this.institucionService.List().subscribe(data => {
        this.institucionService.SetList(data);
      })
    })
  }
}
