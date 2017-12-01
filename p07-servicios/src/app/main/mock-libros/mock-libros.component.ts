import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros',
  templateUrl: './mock-libros.component.html',
  styleUrls: ['./mock-libros.component.css'],
})
export class MockLibrosComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  constructor(public librosService: LibrosService ) {}

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar () {
    this.aLibros = this.librosService.buscarMock(this.sClave);
    this.sClave = '';
  }
}
