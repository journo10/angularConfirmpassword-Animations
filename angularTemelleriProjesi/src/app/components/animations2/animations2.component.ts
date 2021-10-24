import { Component, OnInit } from '@angular/core';
//Angular Animations
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animations2',
  templateUrl: './animations2.component.html',
  styleUrls: ['./animations2.component.css'],
  //Angular Animations
  animations: [
    trigger('changeDivDimension', [
      state('first', style({
        borderRadius:'50%',
        opacity: 0.5,
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      state('end', style({
        opacity: 1,
        backgroundColor: 'yellow',
        width: '200px',
        height: '200px'
      })),
      transition('first=>end', animate('300ms ease-out')),
      transition('end=>first', animate('1000ms'))
    ]),
  ]
})
export class Animations2Component implements OnInit {
   //Angular Animations
  currentStatus = 'first'
  constructor() { }

  ngOnInit(): void {
  }
   //Angular Animations
  changeStatus() {
    this.currentStatus = this.currentStatus === 'first' ? 'end' : 'first';
  }
}
