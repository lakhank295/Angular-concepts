import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public _service: CommonService, private router: Router) { }

  ngOnInit() { }

  logout() {
    // routerLink="login"
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
