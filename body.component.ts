import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor( private rout: Router){}

  Onclick(){
    this.rout.navigate(['/order'])
  }
}
