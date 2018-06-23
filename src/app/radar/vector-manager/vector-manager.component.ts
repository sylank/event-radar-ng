import { EventService } from './../service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vector-manager',
  templateUrl: './vector-manager.component.html',
  styleUrls: ['./vector-manager.component.scss']
})
export class VectorManagerComponent implements OnInit {

  mockData: { name: string, angle: number, distance: number }[] = [
    { 'name': '0', 'angle': 0, 'distance': 50 },
    { 'name': '0', 'angle': 15, 'distance': 50 },
    { 'name': '0', 'angle': 25, 'distance': 50 },
    { 'name': '0', 'angle': 45, 'distance': 50 },
    { 'name': '1', 'angle': 90, 'distance': 25 },
    { 'name': '1', 'angle': 105, 'distance': 25 },
    { 'name': '1', 'angle': 115, 'distance': 25 },
    { 'name': '1', 'angle': 135, 'distance': 25 },
    { 'name': '2', 'angle': 180, 'distance': 50 },
    { 'name': '3', 'angle': 270, 'distance': 50 }
  ];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log(this.mockData);
  }

  getRotation(angle: number) {
    return 'rotate(' + (angle - 90) + 'deg)';
  }

  getLength(length: number) {
    return length + '%';
  }

}
