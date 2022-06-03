import {Component, OnInit} from '@angular/core';
import {AquariumsDataService} from "../services/aquariums-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  fish!: any[];
  aquaId!: string;

  constructor(
    private aquariumsDataService: AquariumsDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.aquaId = params['aquaId'];
        this.getFish(this.aquaId)
      }
    );
  }

  getFish(numb: string) {
    this.aquariumsDataService.getFish(numb).subscribe(
      fish => {
        this.fish = fish;
      }
    )

  }

}
