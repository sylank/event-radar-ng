import { EventService } from './service/event.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements AfterViewInit {

  constructor(private eventService: EventService) { }

  ngAfterViewInit() {

  }

}
