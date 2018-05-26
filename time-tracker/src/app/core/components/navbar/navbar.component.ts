import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  submenuItems: Array<any>;
  constructor() { }

  ngOnInit() {
    this.submenuItems = [
      {
        route: 'timer',
        name: 'Timer',
        iconName: 'access_time'
      },
      {
        route: 'dashboard',
        name: 'Dashboard',
        iconName: 'equalizer'
      }
    ]
  }

}
