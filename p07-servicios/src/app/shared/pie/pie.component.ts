import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  autor: string;
  empresa: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Aleajndro Cerezo';
    this.empresa = 'Indra - Madrid';
  }

}
