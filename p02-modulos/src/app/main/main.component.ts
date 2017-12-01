import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <article class="alto">
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
