import { MathUtils } from './math-utils';
import { ElementRef } from '@angular/core';

export class EventRadarCanvas {
  private static LINE_END_CIRCLE_RAD = 10;

  private static CIRCLE_0_RAD = 10;
  private static CIRCLE_0_COLOR = 'black';

  private static CIRCLE_1_RAD = 60;
  private static CIRCLE_1_COLOR = 'black';

  private static CIRCLE_2_RAD = 110;
  private static CIRCLE_2_COLOR = 'black';

  private static CIRCLE_3_RAD = 160;
  private static CIRCLE_3_COLOR = 'black';

  private static CIRCLE_4_RAD = 210;
  private static CIRCLE_4_COLOR = 'black';

  private static CIRCLE_5_RAD = 300;
  private static CIRCLE_5_COLOR = 'black';

  private context: CanvasRenderingContext2D;

  private canvasWidth;
  private canvasHeight;

  constructor(canvas: ElementRef) {
    this.context = canvas.nativeElement.getContext('2d');

    this.canvasWidth = canvas.nativeElement.width;
    this.canvasHeight = canvas.nativeElement.height;

    console.log('Canvas width: ' + this.canvasWidth);
    console.log('Canvas height: ' + this.canvasHeight);

    this.clearCanvas();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawDefaults() {
    this.setDefaults();

    this.drawCenterCircle(EventRadarCanvas.CIRCLE_0_RAD, 2, EventRadarCanvas.CIRCLE_0_COLOR, true);

    this.drawDottedCircle();
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_1_RAD, 2, EventRadarCanvas.CIRCLE_1_COLOR, false);
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_2_RAD, 2, EventRadarCanvas.CIRCLE_2_COLOR, false);
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_3_RAD, 2, EventRadarCanvas.CIRCLE_3_COLOR, false);
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_4_RAD, 2, EventRadarCanvas.CIRCLE_4_COLOR, false);
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_5_RAD, 2, EventRadarCanvas.CIRCLE_5_COLOR, false);

    this.setDefaults();
  }

  addEvent(angle: number, distance: number, color: string) {
    this.setDefaults();

    console.log('Event added: %d %d %s', angle, distance, color);
    this.drawDestinationLine(angle, distance, 2, color);

    this.setDefaults();
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_0_RAD, 0, EventRadarCanvas.CIRCLE_0_COLOR, true);
    this.setDefaults();
  }

  setDefaults() {
    this.context.lineWidth = 1;
    this.context.setLineDash([]);
    this.context.strokeStyle = '#000';
    this.context.fillStyle = '#000';
  }

  drawLine(fromX: number, fromY: number, toX: number, toY: number, lineWidth: number, color: string) {
    this.context.beginPath();
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = color;

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
    const toPoints: [number, number] = MathUtils.calculateDestination(angle, length, [this.canvasWidth / 2, this.canvasHeight / 2]);

    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, toPoints[0], toPoints[1], lineWidth, color);
    this.drawCircle(toPoints[0], toPoints[1], EventRadarCanvas.LINE_END_CIRCLE_RAD, 1, color, true);
  }

  public getCanvasWidth() {
    return this.canvasWidth;
  }

  public getCanvasHeight() {
    return this.canvasHeight;
  }

}
