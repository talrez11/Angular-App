import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonCompComponent } from './person-comp/person-comp.component';
import { PersonComp2Component } from './person-comp2/person-comp2.component';
import { DirectivesComponent } from './directives/directives.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DirectComponent } from './direct/direct.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    PersonComp2Component,
    DirectivesComponent,
    TestComponent,
    Test2Component,
    DirectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
