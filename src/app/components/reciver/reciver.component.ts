import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.scss']
})
export class ReciverComponent implements OnInit {

  @Input() number: Number;
  title = 'Random number Generator';

  constructor() { }

  ngOnInit() {
    this.number = 89;
  }
}
