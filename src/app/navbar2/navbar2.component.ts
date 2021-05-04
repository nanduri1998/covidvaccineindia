import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor() { }
  // tslint:disable-next-line: no-input-rename
  @Input('date') date: string;
  // tslint:disable-next-line: no-input-rename
  @Input('pincode') pincode: string;
  ngOnInit(): void {
  }

}
