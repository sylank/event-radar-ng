import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radar-caption',
  templateUrl: './radar-caption.component.html',
  styleUrls: ['./radar-caption.component.scss']
})
export class RadarCaptionComponent implements OnInit {
  @Input()
  public caption: string;

  constructor() { }

  ngOnInit() {
  }

}
