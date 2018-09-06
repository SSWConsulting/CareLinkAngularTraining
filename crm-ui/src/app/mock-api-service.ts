import { HttpBackend, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockCompany, MockedCompanies } from './mock-api';

@Injectable({
  providedIn: 'root'
})
export class MockApiService implements HttpBackend {
  returnData(req: HttpRequest<any>, data: any): Observable<any> {
    return new Observable(function(observer) {
      const blob = new Blob([JSON.stringify(data)], {
        type: 'application/json'
      });
      observer.next(
        new HttpResponse({
          body: blob,
          headers: null,
          status: 200,
          statusText: 'OK',
          url: req.urlWithParams
        })
      );
      observer.complete();
    });
  }

  handle(req: HttpRequest<any>): Observable<any> {
    if (req.url.toLocaleLowerCase().indexOf('/api/token') >= 0) {
      return this.returnData(req, 'random_sesionId');
    }
    if (req.url.toLocaleLowerCase().indexOf('/api/companies/') >= 0) {
      return this.returnData(req, MockCompany);
    }

    if (req.url.toLocaleLowerCase().indexOf('/api/companies') >= 0) {
      return this.returnData(req, MockedCompanies);
    }
  }

  constructor() {}
}
