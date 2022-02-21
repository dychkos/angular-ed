import {Component, Input, OnInit} from '@angular/core';
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

  fishImages = [
    'https://i.pinimg.com/236x/85/b4/62/85b46226862a50fa64a63ba1c67993e4--aquarium-fish-for-sale-tropical-aquarium.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9oRdhNyuYZL7tINC9th7W4z_329o3ADFVDzNKYD3LMU3w7HknpU7QEjKSGntZO5tiuA&usqp=CAU',
    'https://images1.ratemyfishtank.com/photo/910x500/0/233/hobby-2364780-1920--1--bkFMahJ.jpg',
  ]

  curImageIndex = 0;
  curImage: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.curImage = this.fishImages[this.curImageIndex];
    setInterval(()=>{
      this.changeCurImage(true);
    },12000);
  }

  changeCurImage(forward:boolean) {
    forward ? this.curImageIndex++ : this.curImageIndex--;

    if(this.curImageIndex >= this.fishImages.length) {
      this.curImageIndex = 0;
    }

    if(this.curImageIndex < 0) {
      this.curImageIndex = this.fishImages.length - 1;
    }

    this.curImage = this.fishImages[this.curImageIndex];

  }

  changeAquaName(name:string){
    // @ts-ignore
    this.aqua.name = name;
  }

  isLong(){
    // @ts-ignore
    return this.aqua.name.length > 10;
  }

}
