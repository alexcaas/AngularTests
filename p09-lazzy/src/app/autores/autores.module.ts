import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorsComponent } from './autors.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  {path: '', component: AutorsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutorsComponent]
})
export class AutoresModule { }
