import { ElementRef } from '@angular/core';

export class EventRadarCanvas {
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
    this.drawCenterCircle(EventRadarCanvas.CIRCLE_0_RAD, 2, EventRadarCanvas.CIRCLE_0_COLOR, true);
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
    const toPoints: [number, number] = this.calculateDestination(angle, length, [this.canvasWidth / 2, this.canvasHeight / 2]);

    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, toPoints[0], toPoints[1], lineWidth, color);
    this.drawCircle(toPoints[0], toPoints[1], 10, 1, color, true);
  }

  calculateDestination(gammaRad: number, c: number, cPoint: [number, number]): [number, number] {
    switch (gammaRad) {
      case 90: {
        return [cPoint[0] + c, cPoint[1]];
      }

      case 180: {
        return [cPoint[0], cPoint[1] + c];
      }

      case 270: {
        return [cPoint[0] - c, cPoint[1]];
      }

      case 360: {
        return [cPoint[0], cPoint[1] - c];
      }
    }

    const beta = this.claculateBeta(gammaRad);
    const alpha = 180 - 90 - beta;

    const a = Math.sin(this.toRadians(alpha)) * c;
    const b = Math.cos(this.toRadians(alpha)) * c;

    let verticalDirection = 1;
    let horizontalDirection = 1;
    if (gammaRad <= 90 && gammaRad >= 0) {
      horizontalDirection = 1;
      verticalDirection = -1;
    }
    if (gammaRad <= 180 && gammaRad >= 90) {
      horizontalDirection = 1;
      verticalDirection = 1;
    }
    if (gammaRad <= 270 && gammaRad >= 180) {
      horizontalDirection = -1;
      verticalDirection = 1;
    }
    if (gammaRad <= 360 && gammaRad >= 270) {
      horizontalDirection = -1;
      verticalDirection = -1;
    }

    const xA = cPoint[0] + (horizontalDirection * a);
    const yA = cPoint[1] + (verticalDirection * b);

    return [xA, yA];
  }

  private claculateBeta(gamma: number): number {
    let setAngle = 90;
    if (gamma <= 90 && gamma >= 0) {
      setAngle = 90;
    }
    if (gamma <= 180 && gamma >= 90) {
      setAngle = 180;
    }
    if (gamma <= 270 && gamma >= 180) {
      setAngle = 270;
    }
    if (gamma <= 360 && gamma >= 270) {
      setAngle = 360;
    }

    return setAngle - gamma;
  }

  private toRadians(angle) {
    return angle * (Math.PI / 180);
  }

}
