import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carrera } from '../model/carrera';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private url=`${base_url}/Carreras`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Carrera[]>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Carrera[]>(this.url)
  }

  insert(carrera:Carrera){
    return this.http.post(this.url, carrera);
  }
  setList(listaNueva:Carrera[]){
    this.listaCambio.next(listaNueva);

  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Carrera>(`${this.url}/${id}`);
  }
  update(aut:Carrera){
    return this.http.put(this.url+"/"+aut.id, aut);

  }
  //Eliminacion
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
