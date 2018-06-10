import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas;

  context: CanvasRenderingContext2D;

  private canvasWidth;
  private canvasHeight;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.canvasWidth = this.myCanvas.nativeElement.width;
    this.canvasHeight = this.myCanvas.nativeElement.height;

    console.log('Canvas width: ' + this.canvasWidth);
    console.log('Canvas height: ' + this.canvasHeight);

    this.initCanvas();
  }

  initCanvas() {
    const ctx = this.context;
    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.setLineDash([2, 4]);

    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 60, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 110, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 160, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 210, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.canvasWidth / 2, this.canvasHeight / 2, 300, 0, 2 * Math.PI);
    ctx.stroke();



    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(this.canvasWidth / 2, this.canvasHeight / 2);
    ctx.lineTo(400, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400, 150, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(this.canvasWidth / 2, this.canvasHeight / 2);
    ctx.lineTo(200, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200, 50, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(this.canvasWidth / 2, this.canvasHeight / 2);
    ctx.lineTo(600, 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(600, 600, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

}
