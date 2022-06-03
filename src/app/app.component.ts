import { Component } from '@angular/core';
import {AquariumsDataService, AquaType} from "./services/aquariums-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ed';

  aquariums! : AquaType[]

  constructor(private aquariumsDataService: AquariumsDataService)
  {
    aquariumsDataService.getAquariums().subscribe(
      aquas =>  this.aquariums = aquas
    );
  }


}

