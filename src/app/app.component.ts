import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular con PHP';
  /* En articulo va a tomar los datos que el usuario ingrese en el input */
  articulos:any;
  
  art={
    codigo:null,
    descripcion:null,
    precio:null
  }
  constructor(private articulosServicio: ArticulosService) {}
  ngOnInit() {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.articulosServicio.mostrarTodos().subscribe((result:any) => this.articulos = result);
  }
  public alta() {
    this.articulosServicio.alta(this.art).subscribe((datos:any) => {
 
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);

        this.recuperarTodos();
      }
    });
  }
  public baja(codigo:any) {
    this.articulosServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  public modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  public seleccionar(codigo:any) {
    this.articulosServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }
  public hayRegistros() {
    return true;
  } 

}