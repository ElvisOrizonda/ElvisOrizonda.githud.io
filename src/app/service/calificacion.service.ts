import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calificacion } from '../model/calificacion';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private url = `${base_url}/Calificacion`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Calificacion[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Calificacion[]>(this.url);
  }
  insert(Calificacion: Calificacion) {
    return this.http.post(this.url, Calificacion);
  }

  setList(listaNueva: Calificacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Calificacion>(`${this.url}/${id}`);
  }
  update(aut: Calificacion) {
    return this.http.put(this.url + "/" + aut.id, aut);
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
