import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Carrera } from 'src/app/model/carrera';

import { CarreraService } from 'src/app/service/carrera.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-carrera-creaedita',
  templateUrl: './carrera-creaedita.component.html',
  styleUrls: ['./carrera-creaedita.component.css']
})
export class CarreraCreaeditaComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  carrera:Carrera = new Carrera();
  mensaje: string="";

  id:number=0;
  edicion:boolean=false;

  constructor(private aS:CarreraService, private router:Router,
              private route:ActivatedRoute)
    {

    }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();

    })
    this.form =new FormGroup({
      id:new FormControl(),
      nombre_Carrera: new FormControl()
    })
  }

  aceptar():void{
    this.carrera.id=this.form.value['id'];
    this.carrera.nombre_Carrera=this.form.value['nombre_Carrera'];

    if(this.form.value['id'].length > 0 &&
    this.form.value['nombre_Carrera'].length > 0){

   if(this.edicion)
   {
        this.aS.update(this.carrera).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })

        })

   }
   else{
    this.aS.insert(this.carrera).subscribe(data=>{
      this.aS.list().subscribe(data=>{
        this.aS.setList(data);
    })
  })
   }
    this.router.navigate(['carreras']);
  }else{

    this.mensaje="Complete los campos requeridos!!!";
    }
  }

  init(){
    if (this.edicion){
      this.aS.listId(this.id).subscribe(data=>{
          this.form=new FormGroup({
            id:new FormControl(data.id),
            nombre_Carrera:new FormControl(data.nombre_Carrera),
          })
      })

    }


  }


}
