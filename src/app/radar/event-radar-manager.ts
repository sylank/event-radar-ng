import { OrderRuler } from './rule/order-ruler';
import { ValueRuler } from './rule/value-ruler';
import { ColorRuler } from './rule/color-ruler';
import { Ruler } from './rule/ruler.model';
import { EventRadarModel } from './model/event-radar-model';
import { EventRadarCanvas } from './event-radar-canvas';

export class EventRadarManager {
  private colorRuler: Ruler<EventRadarModel[]> = new ColorRuler();
  private valueRuler: Ruler<EventRadarModel[]> = new ValueRuler();
  private orderRuler: Ruler<EventRadarModel[]> = new OrderRuler();

  constructor(
    private eventRadarCanvas: EventRadarCanvas,
    private events: EventRadarModel[]
  ) {

  }

  showRadar() {
    this.eventRadarCanvas.drawDefaults();

    this.events = this.colorRuler.evaluate(this.events);
    this.events = this.valueRuler.evaluate(this.events);
    this.events = this.orderRuler.evaluate(this.events);

    console.log(this.events);

    this.events.forEach(element => {
      this.eventRadarCanvas.addEvent(element.angle, element.value, element.color);
    });
  }
}
