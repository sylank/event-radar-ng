import { EventRadarModel } from './../model/event-radar-model';
import { EventModel } from './../model/event-model';
import { Ruler } from './ruler.model';

export class ColorRuler implements Ruler<EventRadarModel[]> {

  evaluate(data: EventRadarModel[]): EventRadarModel[] {

    console.log(data);
    data.forEach(element => {
      if (element.eventDistance >= 0 && element.eventDistance <= 10) {
        // walk
        element.color = '#669AD4';
      }

      if (element.eventDistance >= 10 && element.eventDistance <= 25) {
        // bike
        element.color = '#F9DD3E';
      }

      if (element.eventDistance >= 25) {
        // car
        element.color = '#1D8A99';
      }

    });

    return data;
  }
}
