import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GetStatesService } from '../services/get-states.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private getStates: GetStatesService) { }

  pincodeSelected = false;
  districtSelected = false;
  noneSelected = true;
  stateFinalSelected = false;
  states = [];
  districts = [];
  pincode = new FormControl('');
  state = new FormControl('');
  district = new FormControl('');
  // tslint:disable-next-line: typedef
  async ngOnInit() {
    const resultStates = await this.getStates.getStates();
    this.states = resultStates.states;
  }

  // tslint:disable-next-line: typedef
  searchByPIN() {
    localStorage.clear();
    const pincode = this.pincode.value;
    if (pincode === null || pincode === undefined || pincode === '' || pincode === '000000' || pincode === '999999') {
      alert('Enter a valid Pincode');
      return;
    }
    const finalDate = moment().format('DD-MM-yyyy');
    localStorage.setItem('pincode', pincode);
    localStorage.setItem('date', finalDate);
    localStorage.setItem('momentDate', moment().toString());
    this.router.navigate(['display']);
  }
  // tslint:disable-next-line: typedef
  searchByDistrict() {
    localStorage.clear();
    const district = this.district.value;
    if (district === null || district === undefined || district === '') {
      alert('Enter a valid Pincode');
      return;
    }
    const finalDate = moment().format('DD-MM-yyyy');
    localStorage.setItem('district', district);
    localStorage.setItem('date', finalDate);
    localStorage.setItem('momentDate', moment().toString());
    this.router.navigate(['display']);
  }

  // tslint:disable-next-line: typedef
  navigateByPIN() {
    this.pincodeSelected = true;
    this.noneSelected = false;
    this.districtSelected = false;
  }

  // tslint:disable-next-line: typedef
  navigateByDistrict() {
    this.pincodeSelected = false;
    this.noneSelected = false;
    this.districtSelected = true;
  }

  // tslint:disable-next-line: typedef
  navigateToSelection() {
    this.pincodeSelected = false;
    this.noneSelected = true;
    this.districtSelected = false;
  }

  // tslint:disable-next-line: typedef
  async stateSelected() {
    const state = this.state.value;
    if (state === '') {
      alert('Select valid state');
      return;
    }
    const resultDistrict = await this.getStates.getDistricts(state);
    this.districts = resultDistrict.districts;
    this.stateFinalSelected = true;
  }

}
