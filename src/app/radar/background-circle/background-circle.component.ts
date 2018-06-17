import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-circle',
  templateUrl: './background-circle.component.html',
  styleUrls: ['./background-circle.component.scss']
})
export class BackgroundCircleComponent implements OnInit {
  @Input()
  public text: string;
  @Input()
  public num: number;


  constructor() { }

  ngOnInit() {
  }

  getNum() {
    return this.num - 1;
  }

}
