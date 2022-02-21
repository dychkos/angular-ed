import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ed';

  aquariums:AquaType[] = [
    {
      name : "Big Sea",
      type : "circle",
      capacity : 150,
      fishSpecies : [
        'Silver Angelfish',
        'Neon Tetra',
        'Zebrafish',
        'Common Goldfish',
        'Black Skirt Tetra',
        'Rainbow Platy'
      ]
    },
    {
      name : "Clear ocean",
      type : "square",
      capacity : 220,
      fishSpecies : [
        'Silver Angelfish',
        'Common Goldfish',
        'Black Skirt Tetra',
        'Rainbow Platy'
      ]
    }
  ]
}

export interface AquaType {
  name: string,
  type: string,
  capacity: number,
  fishSpecies: string[] | null
}
