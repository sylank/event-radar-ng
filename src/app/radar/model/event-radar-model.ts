import { EventModel } from './event-model';

export class EventRadarModel extends EventModel {
  color: string;
  value: number;

  constructor(eventName: string,
    eventDistance: number,
    description: string,
    angle: number,
    color: string = '') {
    super(eventName, eventDistance, description, angle);

    this.color = color;
  }
}
