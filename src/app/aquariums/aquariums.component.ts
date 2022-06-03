import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AquariumsDataService, AquaType} from "../services/aquariums-data.service";

@Component({
  selector: 'app-aquariums',
  templateUrl: './aquariums.component.html',
  styleUrls: ['./aquariums.component.css']
})
export class AquariumsComponent implements OnInit {

  @Input()
  aqua!: AquaType;
  @Input()
  aquaIndex!: number;

  showInfo = false

  @Output() aq = new EventEmitter();


  constructor(private aquariumsDataService: AquariumsDataService)
  {

  }

  changeAquaName(name:string){
    // @ts-ignore
    this.aqua.name = name;
  }

  deleteAqua() {
    this.aquariumsDataService.deleteAquarium(this.aquaIndex);
  }


  ngOnInit(): void {
  }

}
