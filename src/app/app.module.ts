import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonCompComponent } from './person-comp/person-comp.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
