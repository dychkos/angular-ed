import { Component, OnInit } from '@angular/core';
import {AquariumsDataService, AquaType} from "../services/aquariums-data.service";

@Component({
  selector: 'app-aquarium-list',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.css']
})
export class AquariumListComponent implements OnInit {

  aquariums! : AquaType[]

  constructor(private aquariumsDataService: AquariumsDataService)
  {
    aquariumsDataService.getAquariums().subscribe(
      aquas =>  this.aquariums = aquas
    );
  }

  ngOnInit(): void {
  }

}
