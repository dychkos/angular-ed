import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AquaType} from "../app.component";

@Component({
  selector: 'app-aquariums',
  templateUrl: './aquariums.component.html',
  styleUrls: ['./aquariums.component.css']
})
export class AquariumsComponent implements OnInit {

  @Input()
  aqua!: AquaType;

  showInfo = false

  @Output() aq = new EventEmitter();


  constructor() {
  }

  changeAquaName(name:string){
    // @ts-ignore
    this.aqua.name = name;
  }

  isLong(){
    // @ts-ignore
    return this.aqua.name.length > 10;
  }
  //@ts-ignore
  onRemove(aqua){
    this.aq.emit(aqua);
  }

  ngOnInit(): void {
  }

}
