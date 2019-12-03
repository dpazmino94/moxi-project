import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  // Carousel of images array
  images: any[];
  constructor() { }

  ngOnInit() {

  }

}
