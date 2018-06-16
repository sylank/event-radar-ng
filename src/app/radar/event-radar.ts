import { ElementRef } from '@angular/core';

export class EventRadar {
  private context: CanvasRenderingContext2D;

  private canvasWidth;
  private canvasHeight;

  constructor(canvas: ElementRef) {
    this.context = canvas.nativeElement.getContext('2d');

    this.canvasWidth = canvas.nativeElement.width;
    this.canvasHeight = canvas.nativeElement.height;

    console.log('Canvas width: ' + this.canvasWidth);
    console.log('Canvas height: ' + this.canvasHeight);
  }

  drawDefaults() {
    this.setDefaults();

    this.drawCenterCircle(10, 2, 'black', true);

    this.drawDottedCircle();
    this.drawCenterCircle(60, 2, 'black', false);
    this.drawCenterCircle(110, 2, 'black', false);
    this.drawCenterCircle(160, 2, 'black', false);
    this.drawCenterCircle(210, 2, 'black', false);
    this.drawCenterCircle(300, 2, 'black', false);

    this.setDefaults();
  }

  setDefaults() {
    this.context.lineWidth = 1;
    this.context.setLineDash([]);
  }

  drawLine(fromX: number, fromY: number, toX: number, toY: number, lineWidth: number, color: string) {
    this.context.beginPath();
    this.context.lineWidth = lineWidth;

    this.context.setLineDash([]);
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);

    this.context.stroke();
  }

  drawCircle(x: number, y: number, rad: number, lineWidth: number, color: string, fill: boolean) {
    this.context.beginPath();
    this.context.lineWidth = lineWidth;
    this.context.fillStyle = color;

    this.context.arc(x, y, rad, 0, 2 * Math.PI);

    if (fill) {
      this.context.fill();
    }

    this.context.stroke();
  }

  drawCenterCircle(rad: number, lineWidth: number, color: string, fill: boolean) {
    this.drawCircle(this.canvasWidth / 2, this.canvasHeight / 2, rad, lineWidth, color, fill);
  }

  drawDottedCircle() {
    this.context.setLineDash([2, 4]);
  }

  drawLineFromOrigo(toX: number, toY: number, lineWidth: number, color: string) {
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, toX, toY, lineWidth, color);
  }

  drawDestinationLine(angle: number, length: number, lineWidth: number, color: string) {
    const toPoints: [number, number] = this.calculateDestination();

    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, toPoints[0], toPoints[1], lineWidth, color);
    this.drawCircle(toPoints[0], toPoints[1], 10, 1, '#fafafa', true);
  }

  calculateDestination(): [number, number] {
    let x: [number, number];
    // Initialize it
    x = [10, 10]; // OK
    return x;
  }
}
