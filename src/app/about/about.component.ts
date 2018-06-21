import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  address = "600 1st Ave, Seattle, WA 98104";
  phone = "206-123-4567";
  email = "mailto:devs@epicodus.com";
  constructor() { }

  ngOnInit() {
  }

}
