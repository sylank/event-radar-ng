import { EventModel } from './../model/event-model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  public getEventData() {
    return this.http.get<EventModel[]>('assets/event/events.json');
  }
}
