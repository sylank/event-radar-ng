import { EventModel } from './model/event-model';
import { EventRadarModel } from './model/event-radar-model';
import { ColorRuler } from './rule/color-ruler';
import { EventService } from './service/event.service';
import { EventRadarCanvas } from './event-radar-canvas';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { EventRadarManager } from './event-radar-manager';
import { Observable } from 'rxjs/Observable';
import { MathUtils } from './math-utils';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements AfterViewInit {

  private context: CanvasRenderingContext2D;

  private eventRadarCanvas: EventRadarCanvas;
  private eventRadarManager: EventRadarManager;

  public elements: Observable<EventModel[]>;

  @ViewChild('myCanvas') myCanvas;

  constructor(private eventService: EventService) { }

  ngAfterViewInit() {
    const canvas = this.myCanvas;

    this.eventRadarCanvas = new EventRadarCanvas(canvas);
    this.eventService.getEventData().subscribe(events => {
      console.log(events);

      let eventlistr: EventRadarModel[];
      eventlistr = events as EventRadarModel[];

      this.eventRadarManager = new EventRadarManager(this.eventRadarCanvas, eventlistr);

      this.eventRadarManager.showRadar();
    });

    this.elements = this.eventService.getEventData();
  }

  getLeft(angle: number, distance: number): string {
    return (MathUtils.calculateDestination(angle, (distance / 80) * 390, [400, 400])[0] + 10) + 'px';
  }

  getTop(angle: number, distance: number): string {
    return (MathUtils.calculateDestination(angle, (distance / 80) * 390, [400, 400])[1] - 15) + 'px';
  }
}
