import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  sTitle: string;
  sEtiquetaBtn: string;

  aItems: Array<any>;
  aItems$: Observable<any[]>;

  constructor(private datosService: DatosService) {

  }

  ngOnInit() {
    this.sTitle = 'Lista de Items';
    this.sEtiquetaBtn = 'Eliminar';
    // establece la subscripción
    this.aItems$ = this.datosService.suscribeDatos();
    this.aItems$.subscribe(
        (data) => this.aItems = data
    );
    this.datosService.updateDatos();
  }

  deleteItem(i) {
    this.datosService.deleteDato(i);
  }
}
