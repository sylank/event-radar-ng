import { EventModel } from '../model/event-model';

export class MathUtils {
  public static calculateDestination(gamma: number, c: number, cPoint: [number, number]): [number, number] {
    switch (gamma) {
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

    const beta = this.claculateBeta(gamma);
    const alpha = 180 - 90 - beta;

    const a = Math.sin(this.toRadians(alpha)) * c;
    const b = Math.cos(this.toRadians(alpha)) * c;

    let verticalDirection = 1;
    let horizontalDirection = 1;
    if (gamma <= 90 && gamma >= 0) {
      horizontalDirection = 1;
      verticalDirection = -1;
    }
    if (gamma <= 180 && gamma >= 90) {
      horizontalDirection = 1;
      verticalDirection = 1;
    }
    if (gamma <= 270 && gamma >= 180) {
      horizontalDirection = -1;
      verticalDirection = 1;
    }
    if (gamma <= 360 && gamma >= 270) {
      horizontalDirection = -1;
      verticalDirection = -1;
    }

    const xA = cPoint[0] + (horizontalDirection * a);
    const yA = cPoint[1] + (verticalDirection * b);

    return [xA, yA];
  }

  public static claculateBeta(gamma: number): number {
    if (gamma <= 90 && gamma >= 0) {
      return 90 - gamma;
    }
    if (gamma <= 180 && gamma >= 90) {
      return gamma - 90;
    }
    if (gamma <= 270 && gamma >= 180) {
      return gamma - 180;
    }
    if (gamma <= 360 && gamma >= 270) {
      return gamma - 270;
    }
  }

  public static toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  public static getMax(elements: EventModel[]): number {
    let max = -1;
    elements.forEach(element => {
      if (element.eventDistance > max) {
        max = element.eventDistance;
      }
    });

    return max;
  }
}
