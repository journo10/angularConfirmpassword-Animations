import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() clapCount:number = 0;
  @Output() changeClap = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clap() {
    this.changeClap.emit();
  }

}
