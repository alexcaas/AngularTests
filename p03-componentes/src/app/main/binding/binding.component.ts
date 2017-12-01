import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BindingComponent implements OnInit {

  sNombre: string;
  constructor() { }

  ngOnInit() {
    this.sNombre = '';
  }
  borrar () {
    this.sNombre = '';
  }
}
