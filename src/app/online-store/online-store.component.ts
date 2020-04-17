import { Router } from '@angular/router';
import { ProductItemModel } from './../common/Models/GeneralModels';
import { COMMON_CONSTANTS, TEXT_CONSTANTS } from './../common/constants/constants';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OnlineStoreProductModel } from '../common/Models/GeneralModels';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from '../common/dialog/common-dialog/common-dialog.component';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html'
})
export class OnlineStoreComponent implements OnInit {
  // Temporary variable for the products
  productsCatalogData: Array<OnlineStoreProductModel>;
  // Responsive Variables
  gridColums = 4;
  // Banner add opacity controller
  opacityController: any
  // Firabase variables
  itemValue = '';
  items: Observable<any[]>;
  constructor(
    public db: AngularFirestore,
    public router: Router,
    public dialog: MatDialog,
    public meta: Meta ) {
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
    if (window.innerWidth > 600) {
      this.gridColums = 3;
    }
    if (window.innerWidth < 600) {
      this.gridColums = 3;
    }
    if (window.innerWidth < 435) {
      this.gridColums = 2;
    }
  }

  // This gets the event of the window scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.opacityController = (100 - window.scrollY) + '%';
  }

  openDialog(action: number): void {
    let title: string;
    let message: string;
    switch (action) {
      case 1:
        title = TEXT_CONSTANTS.GENERAL_INFO_TITLE;
        message = TEXT_CONSTANTS.GENERAL_INFO_MESSAGE;
        break;
      case 2:
        title = TEXT_CONSTANTS.CONTACT_TITLE;
        message = TEXT_CONSTANTS.CONTACT_MESSAGE;
        break;
      case 3:
        title = TEXT_CONSTANTS.POLICY_TITLE;
        message = TEXT_CONSTANTS.POLICY_MESSAGE;
        break;
      case 4:
        title = TEXT_CONSTANTS.ABOUT_TITLE;
        message = TEXT_CONSTANTS.ABOUT_MESSAGE;
        break;
    }
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '550px',
      data: {
        title: title,
        message: message
      }
    });
    dialogRef.afterClosed();
  }

}
// COMMANDS FOR DEPLOY:
// ng build --base-href https://dpazmino94.github.io/moxi-project/
// ngh