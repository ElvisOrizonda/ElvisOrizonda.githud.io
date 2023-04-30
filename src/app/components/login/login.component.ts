import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  u: Usuario = new Usuario();
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  login() {
    if(this.u.Correo_Usuario == this.loginUsuario.value.email && this.u.Contrasena_Usuario == this.loginUsuario.value.password)
    {
      this.router.navigate(['Empresa']);
    }
    else{
      this.router.navigate(['Empresa']);
    }
  }
}
