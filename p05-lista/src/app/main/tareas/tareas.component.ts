import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }

  }

  addTarea() {
    this.aTareas.push(this.sTarea);
    this.actualizaStorage();
    this.sTarea = '';
  }

  deleteTarea(i: number) {
    this.aTareas.splice(i, 1);
    this.actualizaStorage();
  }

  private actualizaStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }
}
