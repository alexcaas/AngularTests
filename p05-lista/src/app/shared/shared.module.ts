import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent,
    LogoComponent
  ],
  exports : [
    CabezaComponent,
    PieComponent
  ]
})
export class SharedModule { }
