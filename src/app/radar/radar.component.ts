import { EventRadarCanvas } from './event-radar-canvas';
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

  private EventRadarCanvas: EventRadarCanvas;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas;

    this.EventRadarCanvas = new EventRadarCanvas(canvas);

    this.initCanvas();
  }

  initCanvas() {
    this.EventRadarCanvas.drawDefaults();

    this.EventRadarCanvas.addEvent(10, 50, 'yellow');
    this.EventRadarCanvas.addEvent(20, 100, 'black');
    this.EventRadarCanvas.addEvent(30, 200, 'red');
    this.EventRadarCanvas.addEvent(40, 300, 'black');
    this.EventRadarCanvas.addEvent(50, 400, 'black');
  }

}
