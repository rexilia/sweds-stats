import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  totalEmission: Promise<any>;
  queryTemplate = [
    {
      name: 'Total Greenhouse gases',
    },
    {
      name: 'WASTE/TOTAl',
    },
  ];
  constructor(private es: EnvironmentService) {}

  ngOnInit(): void {
    this.totalEmission = this.es.getSpecificData();
  }
}
