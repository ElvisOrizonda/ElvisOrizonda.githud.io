import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog'
import { Carrera } from 'src/app/model/carrera';
import { CarreraService } from 'src/app/service/carrera.service';
import { CarreraDialogoComponent } from './carrera-dialogo/carrera-dialogo.component';
@Component({
  selector: 'app-carrera-listar',
  templateUrl: './carrera-listar.component.html',
  styleUrls: ['./carrera-listar.component.css']
})
export class CarreraListarComponent implements OnInit {

  lista: Carrera[]=[]
  dataSource:MatTableDataSource<Carrera> = new MatTableDataSource();
  idMayor:number=0
  displayedColumns: string[]=['id','nombre_Carrera','accion01','accion02']
  constructor(private aS:CarreraService, private dialog:MatDialog){

  }

  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
    this.aS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);

    })
    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(CarreraDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

}

