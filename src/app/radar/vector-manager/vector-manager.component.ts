import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vector-manager',
  templateUrl: './vector-manager.component.html',
  styleUrls: ['./vector-manager.component.scss']
})
export class VectorManagerComponent implements OnInit {

  mockData: { name: string, angle: number, distance: number }[] = [
    { 'name': '', 'angle': 0, 'distance': 0 },
    { 'name': '1', 'angle': 0, 'distance': 0 },
    { 'name': '2', 'angle': 0, 'distance': 0 }
  ];


  constructor() { }

  ngOnInit() {
    console.log(this.mockData);
  }

}
