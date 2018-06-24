import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.component.html',
  styleUrls: ['./event-name.component.scss']
})
export class EventNameComponent implements OnInit {
  @Input()
  title: string;


  constructor() { }

  ngOnInit() {
  }

  titleClick() {
    console.log('clicked: ' + this.title);
  }

}
