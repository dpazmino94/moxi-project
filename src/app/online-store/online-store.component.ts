import { Router } from '@angular/router';
import { ProductItemModel } from './../common/Models/GeneralModels';
import { COMMON_CONSTANTS } from './../common/constants/constants';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OnlineStoreProductModel } from '../common/Models/GeneralModels';



@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html'
})
export class OnlineStoreComponent implements OnInit {
  // Temporary variable for the products
  productsCatalogData: Array<OnlineStoreProductModel>;
  // Responsive Variables
  gridColums = 4;
  // Firabase variables
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFirestore, public router: Router) {
    this.items = db.collection('productos').valueChanges();
  }

  ngOnInit() {
    this.getScreenSize();
    this.items.subscribe(data => {
      this.productsCatalogData = [];
      data.forEach(element => {
        const mapData: OnlineStoreProductModel = new OnlineStoreProductModel()
        mapData.productId = element.id
        mapData.productDescription = element.decription;
        mapData.productImage = element.images[0];
        mapData.productPrice = element.precio;
        mapData.productTitle = element.nombre;
        mapData.productOrder = element.order;
        this.productsCatalogData.push(mapData);
        this.productsCatalogData = this.productsCatalogData.sort((a, b) => (a.productOrder > b.productOrder) ? 1 : -1);
      });
      console.log(data);
    });
  }

  tempCreate() {
    const itemRef = this.db.collection('productos');
    itemRef.add({
      description: 'Texto prueba Texto pruebaTexto pruebaTexto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto pruebaTexto pruebaTexto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto pruebaTexto pruebaTexto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto pruebaTexto pruebaTexto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto prueba Texto pruebaTexto pruebaTexto prueba Texto prueba Texto prueba Texto prueba Texto prueba ',
      howToUse: 'Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 Texto prueba 2 ',     
      images: ['https://i.imgur.com/38Yaapq.jpg'],
      nombre: 'Testosterone Booster',
      precio: '9.99',
    });

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
