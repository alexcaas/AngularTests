import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <article class="container alto">
      <app-form-td class="row"></app-form-td>
      <app-form-md class="row"></app-form-md>
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
