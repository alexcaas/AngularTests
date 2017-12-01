import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-buscar-httpsrv',
  templateUrl: './buscar-httpsrv.component.html',
  styleUrls: ['./buscar-httpsrv.component.css'],
})
export class BuscarHttpsrvComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public libros: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = [];
    this.libros.buscar(this.sClave)
    .then((response) => {
      this.aLibros = response;
    });
  }
}
