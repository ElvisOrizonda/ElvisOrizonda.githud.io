import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa } from '../model/Empresa';
import { Subject } from 'rxjs';
const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private url=`${base_url}/Empresa`
  private listCambio = new Subject<Empresa[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Empresa[]>(this.url);
  }

  Insert(empresa: Empresa) {
    return this.http.post(this.url, empresa)
  }

  SetList(ListaNueva: Empresa[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Empresa>(`${this.url}/${id}`);
  }

  Update(empresa: Empresa) {
    return this.http.put(this.url + "/" + empresa.id, empresa);
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
