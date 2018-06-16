import { EventRadarModel } from './../model/event-radar-model';
import { EventModel } from './../model/event-model';
import { Ruler } from './ruler.model';

export class OrderRuler implements Ruler<EventRadarModel[]> {

  evaluate(data: EventRadarModel[]): EventRadarModel[] {
    return data.sort((a, b) => b.value - a.value);
  }
}
