import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  public sLogo: string;

  constructor() { }

  ngOnInit() {
    this.sLogo = '../../assets/angular_logo.svg';
  }

}
