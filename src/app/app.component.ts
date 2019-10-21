import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  number = 0;

emitRandom($event) {
  this.number = $event;
}

}


