import { Ruler } from './rule/ruler.model';
import { EventRadarModel } from './model/event-radar-model';
import { EventModel } from './model/event-model';
import { EventService } from './service/event.service';
import { EventRadarCanvas } from './event-radar-canvas';

export class EventRadarManager {


  constructor(
    private eventRadarCanvas: EventRadarCanvas,
    private events: EventRadarModel[],
    private ruler: Ruler<EventRadarModel[]>
  ) {

  }

  showRadar() {
    this.eventRadarCanvas.drawDefaults();

    console.log(this.events);
    this.events = this.ruler.evaluate(this.events);

    this.events.forEach(element => {
      this.eventRadarCanvas.addEvent(element.angle, element.eventDistance, element.color);
    });
  }
}
