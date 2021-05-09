import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Sessions } from '../models/findByPin';
import { FindbypinService } from '../services/findbypin.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private findByPINService: FindbypinService, private router: Router) { }
  centers = [];
  pincode: string;
  district: string;
  date: string;
  // tslint:disable-next-line: typedef
  async ngOnInit() {
    this.pincode = localStorage.getItem('pincode');
    this.district = localStorage.getItem('district');
    this.date = localStorage.getItem('date');
    localStorage.setItem('openedAt', localStorage.getItem('momentDate'));
    await this.searchByPinorDistrict();
  }

  // tslint:disable-next-line: typedef
  async searchByPinorDistrict() {
    if (this.pincode) {
      const result = await this.findByPINService.findByPin(this.pincode, this.date);
      this.centers = result.centers.map(center => {
        const finalSession = center.sessions.map(session => {
          if (session.date === this.date) {
            return {
              session_id: session.session_id,
              date: session.date,
              // tslint:disable-next-line: variable-name
              available_capacity: session.available_capacity,
              // tslint:disable-next-line: variable-name
              min_age_limit: session.min_age_limit,
              vaccine: session.vaccine,
              slots: session.slots
            };
          }
        })[0];
        return {
          ...center,
          session: finalSession
        };
      });
    } else if (this.district) {
      const result = await this.findByPINService.findByDistrict(this.district, this.date);
      this.centers = result.centers.map(center => {
        const finalSession = center.sessions.map(session => {
          if (session.date === this.date) {
            return {
              session_id: session.session_id,
              date: session.date,
              // tslint:disable-next-line: variable-name
              available_capacity: session.available_capacity,
              // tslint:disable-next-line: variable-name
              min_age_limit: session.min_age_limit,
              vaccine: session.vaccine,
              slots: session.slots
            };
          }
        })[0];
        return {
          ...center,
          session: finalSession
        };
      });
    }
  }

  // tslint:disable-next-line: typedef
  async goToPrevDate() {
    this.date = moment(localStorage.getItem('momentDate')).subtract(1, 'day').format('DD-MM-yyyy');
    localStorage.setItem('date', this.date);
    localStorage.setItem('momentDate', moment(localStorage.getItem('momentDate')).subtract(1, 'day').toString());
    await this.searchByPinorDistrict();
  }

  // tslint:disable-next-line: typedef
  async goToNextDate() {
    this.date = moment(localStorage.getItem('momentDate')).add(1, 'day').format('DD-MM-yyyy');
    localStorage.setItem('date', this.date);
    localStorage.setItem('momentDate', moment(localStorage.getItem('momentDate')).add(1, 'day').toString());
    await this.searchByPinorDistrict();
  }

}
