import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links = [
    {
      option: 'Migration',
      route: 'migration',
    },
    {
      option: 'Environment',
      route: 'environment',
    },
    {
      option: 'All Statistics',
      route: 'seeall',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
