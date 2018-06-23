import { EventRadarModel } from './../model/event-radar-model';
import { Observable } from 'rxjs/Observable';
import { EventModel } from './../model/event-model';
import { EventService } from './../service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vector-manager',
  templateUrl: './vector-manager.component.html',
  styleUrls: ['./vector-manager.component.scss']
})
export class VectorManagerComponent implements OnInit {

  public destinations: Promise<boolean>;
  public dests: Array<EventModel>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventData().subscribe(
      (element) => {
        this.dests = element;


        console.log(this.dests);

        const max = this.getMax(this.dests);

        this.dests.forEach(e => {
          e.eventDistance = (e.eventDistance / max) * 50;
        });

        console.log(this.dests);

        this.destinations = Promise.resolve(true);
      }
    );

  }

  getRotation(angle: number) {
    return 'rotate(' + (angle - 90) + 'deg)';
  }

  getLength(length: number) {
    return length + '%';
  }

  public getMax(elements: EventModel[]): number {
    let max = -1;
    elements.forEach(element => {
      if (element.eventDistance > max) {
        max = element.eventDistance;
      }
    });

    return max;
  }
}
