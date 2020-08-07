import { Component, OnInit } from '@angular/core';
import { EventData } from 'src/app/models/event.model';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: EventData[];

  // arr = [1, 2, 3, 4]
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this._service.getSpecialEvents().subscribe(res => {
      this.specialEvents = res;
      console.log(this.specialEvents)
    }, err => {
      console.log('ERR => ', err)
    })
  }

}
