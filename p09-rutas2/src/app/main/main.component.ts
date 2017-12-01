import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <article class="alto">
      <h2>Inicio</h2>
    </article>
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
