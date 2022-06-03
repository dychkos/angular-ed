import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {AquariumsDataService} from "../services/aquariums-data.service";

@Component({
  selector: 'app-new-aqua',
  templateUrl: './new-aqua.component.html',
  styleUrls: ['./new-aqua.component.css']
})
export class NewAquaComponent implements OnInit {

  showForm = false;

  @Output() auqa = new EventEmitter();

  ngOnInit(): void {
  }

  constructor(private aquariumsDataService: AquariumsDataService) {
  }

  onSubmit(myForm: { form: { controls: any; }; })
  {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.aquariumsDataService.addAquarium({
      id: Date.now(),
      name: fields.name,
      type: fields.type,
      capacity: fields.capacity,
    });
  }


}
