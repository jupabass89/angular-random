import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ReciverComponent } from './components/reciver/reciver.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiterComponent,
    ReciverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
