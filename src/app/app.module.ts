import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { TwComponent } from './tw/tw.component';
import { FedComponent } from './fed/fed.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    TwComponent,
    FedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
