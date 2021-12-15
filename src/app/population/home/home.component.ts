import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCategories: any;
  specificCategories: any;
  field = new FormControl('', Validators.required);
  path = '';
  queryTemplate = [];
  query = [];
  targets: any;
  nodeTargets: any;
  displayPath = '';

  constructor(private ps: PopulationService) {}

  ngOnInit(): void {
    this.allCategories = this.ps.getAllData('');
  }
  changeNode(target) {
    this.nodeTargets = target.split('/');
    this.path = this.path.concat(`/${this.nodeTargets[0]}`);
    this.displayPath = this.displayPath.concat(`/${this.nodeTargets[1]}`);
    this.allCategories = this.ps.getAllData(this.path);
  }
  changeLeaf(target, code, index) {
    this.targets = target.split('/');
    this.queryTemplate[index] = {
      code,
      target: this.targets[0],
      name: this.targets[1],
    };
  }
  generateQuery() {
    this.queryTemplate.forEach((element, index) => {
      this.query[index] = {
        code: element.code,
        selection: {
          filter: 'item',
          values: [element.target],
        },
      };
    });
    this.specificCategories = this.ps.getSpecificData(this.query, this.path);
    console.log(this.query, this.path);
  }
}
