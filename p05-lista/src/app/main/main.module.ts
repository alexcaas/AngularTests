
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { PipesComponent } from './pipes/pipes.component';

registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, TareasComponent, AcumuladorComponent, PipesComponent],
  exports: [MainComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
})
export class MainModule { }
