import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  // Carousel of images array
  images: any[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']); // (+) converts string 'id' to a number
   });
    this.images = [];
    this.images.push({source:'assets/images/banner_photo.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/banner_photo.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/banner_photo.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/banner_photo.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/banner_photo.jpg', alt:'Description for Image 1', title:'Title 1'});
  }

}

/* 
Hemp Oil 3000mg: https://i.imgur.com/guYrpcw.jpg
Hemp Oil 5000mg: https://i.imgur.com/6LHdo9j.jpg
Hemp CBD Oil 6000mg: https://i.imgur.com/hGdN5ed.jpg
Hemp Oil Pets: https://i.imgur.com/ywtNwtz.jpg
Hemp Cream: https://i.imgur.com/Ckjjg9Q.jpg
Testosterone Booster: https://i.imgur.com/38Yaapq.jpg
Keto 3000mg: https://i.imgur.com/8h9OnWQ.jpg
Keto 1250mg: https://i.imgur.com/s6mBng2.jpg
Keto 800mg: https://i.imgur.com/RZnw0A0.jpg

All Hemp Products: https://i.imgur.com/16O3XLa.jpg
*/
