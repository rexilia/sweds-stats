import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  data = {
    query: [
      {
        code: 'Vaxthusgaser',
        selection: {
          filter: 'item',
          values: ['CO2-ekv.'],
        },
      },
      {
        code: 'Sektor',
        selection: {
          filter: 'item',
          values: ['2.0'],
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['0000018Q'],
        },
      },
      {
        code: 'Tid',
        selection: {
          filter: 'item',
          values: [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
          ],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
  enviUrl =
    'https://api.scb.se/OV0104/v1/doris/en/ssd/MI/MI0107/TotaltUtslappN';
  constructor() {}
  async getSpecificData() {
    try {
      const response = await fetch(`${this.enviUrl}`, {
        method: 'POST',
        body: JSON.stringify(this.data),
      });
      const body = await response.json();
      return body;
    } catch (e) {
      throw new Error(e);
    }
  }
}
