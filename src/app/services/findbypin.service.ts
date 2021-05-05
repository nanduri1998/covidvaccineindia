import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FindByPIN } from '../models/findByPin';

@Injectable({
  providedIn: 'root'
})
export class FindbypinService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  findByPin(pincode: string, date: string) {
    return this.http
    .get<FindByPIN>('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' + pincode + '&date=' + date)
    .toPromise();
  }
  // tslint:disable-next-line: typedef
  findByDistrict(district: string, date: string) {
    return this.http
    .get<FindByPIN>('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=' + district + '&date=' + date)
    .toPromise();
  }
}
