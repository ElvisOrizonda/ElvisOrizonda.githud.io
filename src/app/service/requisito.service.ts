import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Requisito } from '../model/requisito';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class RequisitoService
{

  private url = `${base_url}/Requisitos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Requisito[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Requisito[]>(this.url);
  }
  insert(Calificacion: Requisito) {
    return this.http.post(this.url, Calificacion);
  }

  setList(listaNueva: Requisito[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Requisito>(`${this.url}/${id}`);
  }
  update(aut: Requisito) {
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
