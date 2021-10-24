import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() PData: any;
  @Output() childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onChange(value: any) {
    this.childEvent.emit(value);
  }
}
