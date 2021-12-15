import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImmigrationService {
  migrationUrl =
    'https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101J/ImmiEmiMedb';
  dataImmi = {
    query: [
      {
        code: 'Medbland',
        selection: {
          filter: 'item',
          values: ['IN'],
        },
      },
      {
        code: 'Kon',
        selection: {
          filter: 'item',
          values: ['1'],
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['BE0101M5'],
        },
      },
      {
        code: 'Tid',
        selection: {
          filter: 'item',
          values: [
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
          ],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
  dataEmmi = {
    query: [
      {
        code: 'Medbland',
        selection: {
          filter: 'item',
          values: ['IN'],
        },
      },
      {
        code: 'Kon',
        selection: {
          filter: 'item',
          values: ['1'],
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['BE0101M6'],
        },
      },
      {
        code: 'Tid',
        selection: {
          filter: 'item',
          values: [
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
          ],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
  constructor() {}
  async getSpecificData(mode) {
    try {
      const response = await fetch(`${this.migrationUrl}`, {
        method: 'POST',
        body: JSON.stringify(mode === 'immi' ? this.dataImmi : this.dataEmmi),
      });
      const body = await response.json();
      return body;
    } catch (e) {
      throw new Error(e);
    }
  }
}
