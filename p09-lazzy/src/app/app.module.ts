import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
