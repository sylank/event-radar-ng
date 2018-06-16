import { EventRadar } from './event-radar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas;

  private context: CanvasRenderingContext2D;

  private eventRadar: EventRadar;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas;

    this.eventRadar = new EventRadar(canvas);

    this.initCanvas();
  }

  initCanvas() {
    this.eventRadar.drawDefaults();
  }

}
