import { COMMON_CONSTANTS } from './../common/constants/constants';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html'
})
export class OnlineStoreComponent implements OnInit {
  // Temporary variable for the products
  productsCatalogData = COMMON_CONSTANTS.PRODUCT_CATALOG_DATA;
  // Responsive Variables
  gridColums = 4;

  constructor() { }

  ngOnInit() {
    this.getScreenSize();
  }

  // This gets the event of the window resize
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        console.log(window.innerWidth);
        if (window.innerWidth > 600) {
          this.gridColums = 4;
        }
        if (window.innerWidth < 600) {
          this.gridColums = 3;
        }
        if (window.innerWidth < 435) {
          this.gridColums = 2;
        }
  }

}
// COMMANDS FOR DEPLOY:
// ng build --base-href https://dpazmino94.github.io/moxi-project/
// ngh
