import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container">
      <article class="row alto">
        <app-mock-libros class="col-12"></app-mock-libros>
        <app-mock-libros-async class="col-12 mt-4"></app-mock-libros-async>
        <app-buscar-google class="col-12 mt-4"></app-buscar-google>
        <app-buscar-httpsrv class="col-12 mt-4"></app-buscar-httpsrv>
      </article>
    </div>
  `,
  styles: [
    '.alto {min-height: 10rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
