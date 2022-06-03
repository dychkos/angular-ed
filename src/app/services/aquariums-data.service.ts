import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
  export class AquariumsDataService {

  private aquariums:AquaType[] = [
    {
      id: 1,
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
      id: 2,
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
  ];

  private fish:FishType[] = [
    {name: "Lazarus", aquarium: 1},
    {name: "Quizzi", aquarium: 2},
    {name: "Pocro", aquarium: 2},
  ];


  constructor() { }

  getAquariums(): Observable<any[]>
  {
    return of(this.aquariums);
  }

  getFish(aquaNumb: string): Observable<any[]> {
    return of(this.aquariums.filter(elem => {
      return elem.id = Number(aquaNumb);
    }))
  }

  addAquarium(aqua: AquaType)
  {
    this.aquariums.push(aqua);
  }

  deleteAquarium(index: number)
  {
    this.aquariums.splice(index, 1);
  }

}

export interface AquaType {
  id: number,
  name: string,
  type: string,
  capacity: number,
  fishSpecies?: string[] | null
}

export interface FishType {
  name: string,
  aquarium: number
}

