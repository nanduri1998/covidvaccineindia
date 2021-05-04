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
    const date = this.date.value;
    const finalDate = moment(date).format('DD-MM-yyyy');
    localStorage.setItem('pincode', pincode);
    localStorage.setItem('date', finalDate);
    this.router.navigate(['display']);
  }

}
