import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button> 
    {{counterValue}}
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() private counterValue;

  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

  decrement(): void {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  increment(): void {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}
