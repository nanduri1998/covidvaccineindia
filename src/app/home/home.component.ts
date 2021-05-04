import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  pincode = new FormControl('');
  date = new FormControl('');
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  searchByPIN() {
    const pincode = this.pincode.value;
    const date: string = this.date.value;
    if (pincode === null || pincode === undefined || pincode === '' || pincode === '000000' || pincode === '999999') {
      alert('Enter a valid Pincode');
      return;
    }
    if (date === null || date === undefined || date === '' || date.match('^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$')) {
      alert('Enter a valid Date');
      return;
    }
    const finalDate = moment(date).format('DD-MM-yyyy');
    localStorage.setItem('pincode', pincode);
    localStorage.setItem('date', finalDate);
    this.router.navigate(['display']);
  }

}
