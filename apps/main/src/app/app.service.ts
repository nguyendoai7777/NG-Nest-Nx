import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3333/'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }
  getListItem(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}items/all`, {});
  }
}
