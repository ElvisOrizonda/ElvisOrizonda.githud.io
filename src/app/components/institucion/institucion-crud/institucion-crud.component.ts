import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Institucion_Educativa } from 'src/app/model/institucion';
import { InstitucionService } from 'src/app/service/institucion.service';

@Component({
  selector: 'app-institucion-crud',
  templateUrl: './institucion-crud.component.html',
  styleUrls: ['./institucion-crud.component.css']
})
export class InstitucionCrudComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  institucion : Institucion_Educativa = new Institucion_Educativa();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private institucionService: InstitucionService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
   this.route.params.subscribe((data: Params) =>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
   })
   this.form = new FormGroup({
    id: new FormControl(),
    nombre_Institucion: new FormControl()
  });
  }

  aceptar(): void {
    this.institucion.id= this.form.value['id'];
    this.institucion.nombre_Institucion= this.form.value['nombre_Institucion'];
    if (this.form.value['nombre_Institucion'].length > 0){

      if (this.edicion) {
        //actualice
        this.institucionService.Update(this.institucion).subscribe(() => {
          this.institucionService.List().subscribe(data => {
            this.institucionService.SetList(data);
          })
        })

      } else {
        this.institucionService.Insert(this.institucion).subscribe(data => {
          this.institucionService.List().subscribe(data => {
            this.institucionService.SetList(data);
          })
        })
      }

      this.router.navigate(['Institucion']);
    } else {
      this.mensaje = "Complete todos los campos!";
    }
  }

  init() {
    if (this.edicion) {
      this.institucionService.ListId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre_Institucion: new FormControl(data.nombre_Institucion)
        })
      })
    }
  }

}
