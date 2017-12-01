import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';
import { DatosService } from './datos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ItemComponent,
    ListaComponent],
  providers: [
    DatosService
   ],
  exports : [
    MainComponent
  ]
})
export class MainModule { }
