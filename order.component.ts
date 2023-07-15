import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup = this._formBuilder.group({
    mobileNo: ['', Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    trainNo: [,Validators.required],
    date: [],
    journeytime:[, Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
   boardingStation: ['', Validators.required]

  });

  valid(event:any){

    console.log(event)

    if(event.key=='e' || event.key=='E' || event.key=='+' || event.key=='-' || event.key=='.')

      event.preventDefault()

  }

}
