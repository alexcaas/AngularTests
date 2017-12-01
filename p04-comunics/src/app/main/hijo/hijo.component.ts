import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() sNombre: string;
  @Output() eRespuesta: EventEmitter<string>;
  sNuevoNombre: string;

  constructor() {
    this.eRespuesta = new EventEmitter();
  }

  ngOnInit() {
    this.sNuevoNombre = '';
  }

  responder() {
    this.eRespuesta.emit(this.sNuevoNombre);
  }
}
