import { EventService } from './radar/service/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RadarAppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundCircleComponent } from './radar/background-circle/background-circle.component';
import { RadarVectorComponent } from './radar/vector-manager/radar-vector/radar-vector.component';
import { VectorManagerComponent } from './radar/vector-manager/vector-manager.component';
import { RadarCaptionComponent } from './radar/vector-manager/radar-caption/radar-caption.component';


@NgModule({
  declarations: [
    RadarAppComponent,
    RadarComponent,
    BackgroundCircleComponent,
    RadarVectorComponent,
    VectorManagerComponent,
    RadarCaptionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [RadarAppComponent],
  exports: [RadarAppComponent]
})
export class RadarAppModule { }
