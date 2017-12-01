import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ExpresionesComponent } from './expresiones/expresiones.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    BindingComponent,
    ExpresionesComponent,
    LocalComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
