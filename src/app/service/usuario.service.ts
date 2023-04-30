import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Usuario } from '../model/usuario';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url=`${base_url}/Usuario`
  private listaCambio=new Subject<Usuario[]>()
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Usuario[]>(this.url);
  }
  insert(u: Usuario){
    return this.http.post(this.url,u)
  }
  setList(ListaNueva: Usuario[]){
    this.listaCambio.next(ListaNueva);
    }
    getList(){
      return this.listaCambio.asObservable();
    }
    listId(id: number) {
      return this.http.get<Usuario>(`${this.url}/${id}`);
    }
    update(au:Usuario){
      return this.http.put(this.url+"/"+au.id,au)
    }
    delete(id: number) {
      return this.http.delete(`${this.url}/${id}`)
    }

    getConfirmDelete(){
      return this.confirmarEliminacion.asObservable();
    }
    setConfirmDelete(estado:Boolean){
      this.confirmarEliminacion.next(estado);
    }
  }
