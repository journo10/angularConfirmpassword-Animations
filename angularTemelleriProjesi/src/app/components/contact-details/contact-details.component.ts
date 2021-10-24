import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  public clap = 7;
  constructor() {}

  ngOnInit(): void {}

  //click
  clickClap() {
    console.log(this.clap + ' defa alkışlandı...');
    this.clap++;
  }
}
