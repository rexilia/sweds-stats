import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { element } from 'protractor';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root',
})
export class PopulationService {
  constructor(private http: HttpClient) {}

  genericUrl = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
  data = {
    query: [
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['000000DC'],
        },
      },
      {
        code: 'Region',
        selection: {
          filter: 'item',
          values: ['00', '01'],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllData(category) {
    return this.http
      .get(`${this.genericUrl}${category}`, {
        responseType: 'json',
      })
      .pipe(
        map((data: any) => {
          if (data.variables) {
            data.variables.forEach((element) => {
              element.testing = element.valueTexts.reduce(function (
                result,
                field,
                index
              ) {
                result['value'] = field;
                result[element.values[index]] = field;
                return result;
              },
              {});
            });
          }
          return data;
        })
      );
  }
  async getSpecificData(queri, category) {
    console.log(this.data, { query: queri });
    try {
      const response = await fetch(`${this.genericUrl}${category}`, {
        method: 'POST',
        body: JSON.stringify({ query: queri, response: { format: 'json' } }),
      });
      const body = await response.json();
      console.log('body', body);
      return body;
    } catch (e) {
      throw new Error(e);
    }
  }
}
