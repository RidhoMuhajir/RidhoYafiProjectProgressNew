import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

}
