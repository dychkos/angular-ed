import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./my/my.component";
import { AquariumsComponent } from './aquariums/aquariums.component';
import {FormsModule} from "@angular/forms";
import { NewAquaComponent } from './new-aqua/new-aqua.component';
import { AquariumListComponent } from './aquarium-list/aquarium-list.component';
import { FishListComponent } from './fish-list/fish-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path: 'aquariums', component: AquariumListComponent},
  {path: 'fish/:aquaId', component: FishListComponent},
  {path: '', redirectTo: 'aquariums', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    AquariumsComponent,
    NewAquaComponent,
    AquariumListComponent,
    FishListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
