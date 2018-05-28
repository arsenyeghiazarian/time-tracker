import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  submenuItems: Array<any>;
  isNotificationsOpen: boolean = false;
  notifications = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
  ];
  constructor() { }

  ngOnInit() {
    this.submenuItems = [
      {
        path: 'timer',
        name: 'Timer',
        iconName: 'access_time'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        iconName: 'insert_chart'
      },
      {
        path: 'reports',
        name: 'Reports',
        iconName: 'list_alt'
      },
      {
        path: 'insights',
        name: 'Insights',
        iconName: 'show_chart'
      },
      {
        path: 'saved-reports',
        name: 'Saved Reports',
        iconName: 'star'
      },
    ]
  }

}
