import { Component, OnInit } from '@angular/core';
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
  district: string;
  date: string;
  // tslint:disable-next-line: typedef
  async ngOnInit() {
    this.pincode = localStorage.getItem('pincode');
    this.district = localStorage.getItem('district');
    this.date = localStorage.getItem('date');
    if (this.pincode) {
      const result = await this.findByPINService.findByPin(this.pincode, this.date);
      this.centers = result.sessions;
    } else if (this.district) {
      const result = await this.findByPINService.findByDistrict(this.district, this.date);
      this.centers = result.sessions;
    }
  }

}
