import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss']
})
export class EmiterComponent implements OnInit {

  @Output() random = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitRandomNumber() {
    this.random.emit(Math.floor(Math.random() * (1000 - 1)) + 1);
  }
}
