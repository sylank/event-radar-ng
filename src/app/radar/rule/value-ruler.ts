import { EventRadarModel } from './../model/event-radar-model';
import { Ruler } from './ruler.model';
export class ValueRuler implements Ruler<EventRadarModel[]> {

  evaluate(events: EventRadarModel[]): EventRadarModel[] {
    let max = -1;
    events.forEach(element => {
      if (element.eventDistance > max) {
        max = element.eventDistance;
      }
    });

    events.forEach(element => {
      element.value = (element.eventDistance / max) * 390;
    });

    return events;
  }
}
