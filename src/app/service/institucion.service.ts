import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Institucion_Educativa } from '../model/institucion';
import { Subject } from 'rxjs';
const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  private url=`${base_url}/Institucion_Educativa`
  private listCambio = new Subject<Institucion_Educativa[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Institucion_Educativa[]>(this.url);
  }

  Insert(institucion: Institucion_Educativa) {
    return this.http.post(this.url, institucion)
  }

  SetList(ListaNueva: Institucion_Educativa[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Institucion_Educativa>(`${this.url}/${id}`);
  }

  Update(institucion: Institucion_Educativa) {
    return this.http.put(this.url + "/" + institucion.id, institucion);
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  GetConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  SetConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
