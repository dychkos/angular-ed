import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquariums',
  templateUrl: './aquariums.component.html',
  styleUrls: ['./aquariums.component.css']
})
export class AquariumsComponent implements OnInit {

  name = "Big Sea";
  type = "circle";

  capacity = 150;

  fishSpecies = [
    'Silver Angelfish',
    'Neon Tetra',
    'Zebrafish',
    'Common Goldfish',
    'Black Skirt Tetra',
    'Rainbow Platy'
  ];

  fishImages = [
    'https://i.pinimg.com/236x/85/b4/62/85b46226862a50fa64a63ba1c67993e4--aquarium-fish-for-sale-tropical-aquarium.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9oRdhNyuYZL7tINC9th7W4z_329o3ADFVDzNKYD3LMU3w7HknpU7QEjKSGntZO5tiuA&usqp=CAU',
    'https://images1.ratemyfishtank.com/photo/910x500/0/233/hobby-2364780-1920--1--bkFMahJ.jpg',
  ]

  curImageIndex = 0;
  curImage: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.curImage = this.fishImages[this.curImageIndex];
    setInterval(()=>{
      this.curImageIndex++;
      if(this.curImageIndex >= this.fishImages.length){
        this.curImageIndex = 0;
      }
      this.curImage = this.fishImages[this.curImageIndex];
    },1500);

  }

}
