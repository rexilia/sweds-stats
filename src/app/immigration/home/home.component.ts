import { Component, OnInit } from '@angular/core';
import { ImmigrationModule } from '../immigration.module';
import { ImmigrationService } from '../immigration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  immigration: Promise<any>;
  queryTemplate = [
    {
      name: 'India',
    },
    {
      name: 'Male',
    },
  ];
  emmigration: Promise<any>;

  constructor(private is: ImmigrationService) {}

  ngOnInit(): void {
    this.immigration = this.is.getSpecificData('immi');
    this.emmigration = this.is.getSpecificData('emmi');
  }
}
