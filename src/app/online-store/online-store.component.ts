import { COMMON_CONSTANTS } from './../common/constants/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html'
})
export class OnlineStoreComponent implements OnInit {
// Temporary variable for the products
productsCatalogData = COMMON_CONSTANTS.PRODUCT_CATALOG_DATA;
  constructor() { }

  ngOnInit() {
  }

}
