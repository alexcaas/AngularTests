import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatosService {

  aDatos: Array<any>;
  // añado una variaable capaz de informar de los cambios que se produzcan en la anterior
  aDatos$: Subject<any[]>;

 constructor() {
    this.aDatos$ = new Subject<any[]>();
    // si existe se extrae de localStorage
    if (localStorage.getItem('items')) {
      this.aDatos = JSON.parse(localStorage.getItem('items'));
    } else {
      this.aDatos = [];
    }
  }

  suscribeDatos() {
    return this.aDatos$;
  }

  updateDatos() {
    this.aDatos$.next(this.aDatos);
  }

  postDato(dato) {
    this.aDatos.push(dato);
    this.actualizaStorage();
  }

  deleteDato(i) {
    this.aDatos.splice(i, 1);
    this.actualizaStorage();
  }


  private actualizaStorage() {
    localStorage.setItem('items', JSON.stringify(this.aDatos));
    // emito un evento informando de los cambios troducidos en la variable
    this.aDatos$.next(this.aDatos);

  }
}
