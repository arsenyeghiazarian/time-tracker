import { Component, OnInit } from '@angular/core';
import { UiStateService } from "../../services/ui-state.service";

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
  constructor( public uiService: UiStateService) {}

  ngOnInit() {
    this.submenuItems = [
      {
        title: null,
        children: [
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
          }
        ]
      },
      {
        title: 'Manage',
        children: [
          {
            path: 'projects',
            name: 'Projects',
            iconName: 'folder'
          },
          {
            path: 'clients',
            name: 'Clients',
            iconName: 'person_pin'
          },
          {
            path: 'team',
            name: 'Team',
            iconName: 'supervisor_account'
          },
          {
            path: 'Workspace',
            name: 'Workspace',
            iconName: 'work'
          },
          {
            path: 'tags',
            name: 'Tags',
            iconName: 'local_offer'
          },
          {
            path: 'help',
            name: 'Help',
            iconName: 'help'
          }
        ]
      },
    ]
  }

}
