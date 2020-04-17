import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductItemModel, ItemCartModel } from '../common/Models/GeneralModels';
import { TEXT_CONSTANTS } from '../common/constants/constants';
import { CommonDialogComponent } from '../common/dialog/common-dialog/common-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../common/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  // Carousel of images array
  images: any[];
  // Product data variables
  productData: ProductItemModel = new ProductItemModel();
  // Price variable for Quantity
  publicPrice: number;
  selectedQuantity: string;
  productId: string;
  constructor(
    private route: ActivatedRoute,
     public db: AngularFirestore, 
     public dialog: MatDialog,
     private cartService: CartService) {
    // This gets the firestore id param from the URL
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Firestore query
      const docRef = db.collection("productos").doc(this.productId).valueChanges();
      // This gets the data from the variable
      docRef.subscribe((data: any) => {
        // This parts gets the images from firestore and fills the galleria
        this.images = [];
        data.images.forEach((element, index) => {
          this.images.push({ source: element, alt: 'Description for Image' + index, title: 'Title ' + index });
        });
        // This part gets all the info for the product
        this.productData.precio = data.precio;
        this.publicPrice = Number(this.productData.precio);
        this.productData.nombre = data.nombre;
        this.productData.description = data.description;
        this.productData.howToUse = data.howToUse;
      });
    });
  }

  openDialog(action: number): void {
    let title: string;
    let message: string;
    switch (action) {
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

  onQuantityChange() {
    this.publicPrice = Number(this.productData.precio) * Number(this.selectedQuantity);
  }

  addToCart() {
    let cartItem: ItemCartModel = new ItemCartModel();
    cartItem.productId = this.productId;
    cartItem.productName = this.productData.nombre;
    cartItem.productImage = this.images[0].source;
    cartItem.productPrice = (this.publicPrice) ? this.publicPrice:  Number(this.productData.precio);
    cartItem.productQuantity = ((this.selectedQuantity)) ? Number(this.selectedQuantity): 1;
    this.cartService.readCartObject(cartItem);
    this.dialog.open(CommonDialogComponent, {
      width: '550px',
      data: {
        title: 'Producto añadido al carrito exitosamente',
        message: ''
      }
    });
  }

  ngOnInit() { }

}

/*
Hemp Oil 3000mg: https://i.imgur.com/guYrpcw.jpg

Hemp Oil 5000mg:
https://i.imgur.com/6LHdo9j.jpg
https://i.imgur.com/Cxlvluk.jpg
https://i.imgur.com/jE3XlEe.jpg
https://i.imgur.com/u4Uljmr.jpg
https://i.imgur.com/dVN53BP.jpg
https://i.imgur.com/cn0VYwV.jpg
https://i.imgur.com/Pe8AgvW.jpg
https://i.imgur.com/nPflCFp.jpg
https://i.imgur.com/ifYQYwJ.jpg

Hemp CBD Oil 6000mg:
https://i.imgur.com/hGdN5ed.jpg
https://i.imgur.com/02os1t6.jpg
https://i.imgur.com/9ceh4To.jpg
https://i.imgur.com/eCQvgul.jpg
https://i.imgur.com/Ounn3cE.jpg
https://i.imgur.com/ilEMV0J.jpg

Hemp Oil Pets: https://i.imgur.com/ywtNwtz.jpg

Hemp Cream:
https://i.imgur.com/Ckjjg9Q.jpg
https://i.imgur.com/qcqphBu.jpg
https://i.imgur.com/E7xoN9d.jpg
https://i.imgur.com/MsY0n79.jpg
https://i.imgur.com/dAH0PKb.jpg
https://i.imgur.com/2pIVZ78.jpg
https://i.imgur.com/iIFIfu8.jpg

Testosterone Booster:
https://i.imgur.com/38Yaapq.jpg
https://i.imgur.com/8n1uxgs.jpg
https://i.imgur.com/ePthLPR.jpg
https://i.imgur.com/gbdO1u2.jpg
https://i.imgur.com/68GBGrX.jpg

Keto 3000mg: https://i.imgur.com/8h9OnWQ.jpg
Keto 1250mg: https://i.imgur.com/s6mBng2.jpg
Keto 800mg: https://i.imgur.com/RZnw0A0.jpg

All Hemp Products: https://i.imgur.com/16O3XLa.jpg
*/
