import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  sItem: string;
  sEtiquetaInput: string;
  sEtiquetaBtn: string;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.sEtiquetaInput = 'Escribe una tarea';
    this.sEtiquetaBtn = 'Añadir';
  }

  addItem() {
    this.datosService.postDato(this.sItem);
    this.sItem = '';
  }
}
