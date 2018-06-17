import { EventService } from './radar/service/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { HttpClientModule } from '@angular/common/http';
import { EventNameComponent } from './radar/event-name/event-name.component';
import { BackgroundCircleComponent } from './radar/background-circle/background-circle.component';


@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    EventNameComponent,
    BackgroundCircleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
