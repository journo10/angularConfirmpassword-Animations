import { Component, OnInit } from '@angular/core';
//Angular Animations
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  //Angular Animations
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AnimationsComponent implements OnInit {
  //Angular Animations
  itemList:any = [];
  orderList = 0;
  constructor() { }

  ngOnInit(): void {
  }
  //Ekle
  addElement(): void {
    const listitem = 'Liste elemanı  ' + this.orderList;
    this.orderList++;
    this.itemList.push(listitem);
  }

  //Sil
  clearElement(): void {
    this.itemList.length -= 1;

  }
}
