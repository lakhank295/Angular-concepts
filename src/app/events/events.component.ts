import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { EventData } from '../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventData[];

  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this._service.getEvents().subscribe(res => {
      this.events = res;
      console.log(this.events)
    }, err => {
      console.log('ERR => ', err)
    })
  }
}
