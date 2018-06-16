import { EventRadarModel } from './model/event-radar-model';
import { ColorRuler } from './rule/color-ruler';
import { EventService } from './service/event.service';
import { EventRadarCanvas } from './event-radar-canvas';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { EventRadarManager } from './event-radar-manager';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements AfterViewInit {

  private context: CanvasRenderingContext2D;

  private eventRadarCanvas: EventRadarCanvas;
  private eventRadarManager: EventRadarManager;
  private eventColorRuler: ColorRuler;

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

  }

}
