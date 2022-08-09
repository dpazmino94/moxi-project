import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-banner',
  templateUrl: './grid-banner.component.html',
  styleUrls: ['./grid-banner.component.scss']
})
export class GridBannerComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
