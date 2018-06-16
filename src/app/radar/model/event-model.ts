export class EventModel {
  eventName: string;
  eventDistance: number;
  description: string;
  angle: number;

  constructor(eventName: string,
    eventDistance: number,
    description: string,
    angle: number) {

    this.eventName = eventName;
    this.eventDistance = eventDistance;
    this.description = description;
    this.angle = angle;
  }
}
