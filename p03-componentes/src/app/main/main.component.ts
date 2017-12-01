import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container" >
    <article class="row alto">
      <app-binding class="col-6 mt-3"></app-binding>
      <app-expresiones class="col-6 mt-3"></app-expresiones>
      <app-local class="col-6 mt-3" ></app-local>
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
