import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonCompComponent } from './person-comp/person-comp.component';
import { PersonComp2Component } from './person-comp2/person-comp2.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectComponent } from './direct/direct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    PersonComp2Component,
    DirectivesComponent,
    DirectComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
