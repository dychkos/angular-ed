import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-aqua',
  templateUrl: './new-aqua.component.html',
  styleUrls: ['./new-aqua.component.css']
})
export class NewAquaComponent implements OnInit {

  showForm = false;

  @Output() auqa = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: { form: { controls: any; }; }){
    const fields = myForm.form.controls;
    this.showForm = false;
    this.auqa.emit({
      name: fields.name,
      type: fields.type,
      capacity: fields.capacity,
    });
  }


}
