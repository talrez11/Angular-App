import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonCompComponent } from './person-comp/person-comp.component';
import { PersonComp2Component } from './person-comp2/person-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    PersonComp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
