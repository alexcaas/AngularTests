import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: object;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 542.238323;
    this.dFecha = new Date();
    this.oDatos = {
      sNombre : 'Pepe perez',
      nPrecio : 25.5,
      nValor : 542.238323,
      dFecha : new Date()
    };
  }

}
