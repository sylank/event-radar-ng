import { MathUtils } from './../math-utils';
import { EventRadarModel } from './../model/event-radar-model';
import { Ruler } from './ruler.model';
export class ValueRuler implements Ruler<EventRadarModel[]> {

  evaluate(events: EventRadarModel[]): EventRadarModel[] {
    const max = MathUtils.getMax(events);

    events.forEach(element => {
      element.value = (element.eventDistance / max) * 390;
    });

    return events;
  }
}
