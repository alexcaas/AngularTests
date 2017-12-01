import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros-async',
  templateUrl: './mock-libros-async.component.html',
  styleUrls: ['./mock-libros-async.component.css'],
})
export class MockLibrosAsyncComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  constructor(public librosService: LibrosService ) {}

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar () {
    console.log('buscando');
    this.librosService.buscarMockAsync(this.sClave)
    .then(JSON.parse)
    .then(
      (response) => {
        console.log(response);
        this.aLibros = response; }, // función en caso de OK
      () => {} // funcion en caso de error
    );
    this.sClave = '';
  }
}
