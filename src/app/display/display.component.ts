import { Component, OnInit } from '@angular/core';
import { FindByPIN } from '../models/findByPin';
import { FindbypinService } from '../services/findbypin.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private findByPINService: FindbypinService) { }
  centers = [];
  pincode: string;
  date: string;
  // tslint:disable-next-line: typedef
  async ngOnInit() {
    this.pincode = localStorage.getItem('pincode');
    this.date = localStorage.getItem('date');
    const result = await this.findByPINService.findByPin(this.pincode, this.date);
    this.centers = result.sessions;
  }

}
