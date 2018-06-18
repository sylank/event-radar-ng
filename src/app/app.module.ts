import { EventService } from './radar/service/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundCircleComponent } from './radar/background-circle/background-circle.component';
import { RadarVectorComponent } from './radar/vector-manager/radar-vector/radar-vector.component';
import { VectorManagerComponent } from './radar/vector-manager/vector-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    BackgroundCircleComponent,
    RadarVectorComponent,
    VectorManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
