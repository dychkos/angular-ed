import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./my/my.component";
import { AquariumsComponent } from './aquariums/aquariums.component';
import {FormsModule} from "@angular/forms";
import { NewAquaComponent } from './new-aqua/new-aqua.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    AquariumsComponent,
    NewAquaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
