import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  sAutor: string;
  sLugar: string;
  nFecha: number;

  constructor() { }

  ngOnInit() {
    this.sAutor = 'Alejandro Cerezo';
    this.sLugar = 'Madrid';
    this.nFecha = 2017;
  }

}
