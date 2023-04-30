import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Empresa } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-empresa-crud',
  templateUrl: './empresa-crud.component.html',
  styleUrls: ['./empresa-crud.component.css']
})
export class EmpresaCRUDComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  empresa : Empresa = new Empresa();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private empresaService: EmpresaService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
   this.route.params.subscribe((data: Params) =>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
   })
   this.form = new FormGroup({
    id: new FormControl(),
    nombre_Empresa: new FormControl(),
    descripcion_Empresa: new FormControl(),
    correo_Empresa: new FormControl('',[Validators.required,Validators.email])
  });
  }

  aceptar(): void {
    this.empresa.id= this.form.value['id'];
    this.empresa.nombre_Empresa= this.form.value['nombre_Empresa'];
    this.empresa.descripcion_Empresa = this.form.value['descripcion_Empresa'];
    this.empresa.correo_Empresa = this.form.value['correo_Empresa'];
    if (this.form.value['nombre_Empresa'].length > 0 && this.form.value['correo_Empresa'].ValidationErrors){

      if (this.edicion) {
        //actualice
        this.empresaService.Update(this.empresa).subscribe(() => {
          this.empresaService.List().subscribe(data => {
            this.empresaService.SetList(data);
          })
        })

      } else {
        this.empresaService.Insert(this.empresa).subscribe(data => {
          this.empresaService.List().subscribe(data => {
            this.empresaService.SetList(data);
          })
        })
      }

      this.router.navigate(['Empresa']);
    } else {
      this.mensaje = "Complete todos los campos!";
    }
  }

  init() {
    if (this.edicion) {
      this.empresaService.ListId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre_Empresa: new FormControl(data.nombre_Empresa),
          descripcion_Empresa: new FormControl(data.descripcion_Empresa),
          correo_Empresa: new FormControl(data.correo_Empresa),
        })
      })
    }
  }

}
