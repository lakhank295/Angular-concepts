import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public activeFlag;

  constructor() { }

  ngOnInit(): void {
    this.activeFlag = false;
  }

  toggleActive() {
    this.activeFlag = !this.activeFlag;
  }

}
