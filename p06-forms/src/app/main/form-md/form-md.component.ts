import { Component, OnInit } from '@angular/core';
import { ImpresoraModel, DepartamentoModel } from '../datos.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  aImpresoras: Array<ImpresoraModel>;
  aDepartamentos: Array<DepartamentoModel>;
  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.aImpresoras = [
      {id: 1, nombre: 'HP'},
      {id: 2, nombre: 'Lexmark'},
      {id: 3, nombre: 'Cannon'},
      {id: 4, nombre: 'Brother'}
    ];

    this.aDepartamentos = [
       {id: 1, nombre: 'Ventas'},
       {id: 2, nombre: 'Marketing'},
       {id: 3, nombre: 'Compras'},
       {id: 4, nombre: 'Sistemas'}
    ];

    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^\d{9}$')]),
      impresora: new FormControl(),
      iscolor: new FormControl(true),
      isclaro: new FormControl(true),
      departamento: new FormControl()
    });

    console.log(this.formulario)
  }

  enviarForm() {
    console.log('Formulario enviado');
  }

  borrarForm() {
  }
}
