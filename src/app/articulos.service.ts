import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  recuperarTodos() {
    throw new Error('Method not implemented.');
  }

  url='http://localhost/problema016/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  public mostrarTodos() {
    return this.http.get(`${this.url}recuperar.php`);
  }

  alta(articulo: any ) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  public baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  public seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  public modificacion(articulo : any) {
    return this.http.post(`${this.url}modificar.php`, JSON.stringify(articulo));    
  } 
}
