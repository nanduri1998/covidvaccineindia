import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, States } from '../models/allStates';

@Injectable({
  providedIn: 'root'
})
export class GetStatesService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getStates() {
    return this.http.get<States>('https://cdn-api.co-vin.in/api/v2/admin/location/states').toPromise();
  }
  // tslint:disable-next-line: typedef
  getDistricts(stateId: number) {
    return this.http.get<District>('https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + stateId).toPromise();
  }
}
