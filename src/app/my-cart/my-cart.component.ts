import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEXT_CONSTANTS } from '../common/constants/constants';
import { CommonDialogComponent } from '../common/dialog/common-dialog/common-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductItemModel } from '../common/Models/GeneralModels';
import { Router } from '@angular/router';
declare var paypal;
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  @ViewChild('paypal') paypal: ElementRef;
  cartItems: any;
  totalPrice = 0;
  description = '';
  clientPhoneNumber = '';
  numberSaved = false;
  emptyCart = true;
  // Paypal variables
  paidFor = false;
  product = {
    price: this.totalPrice,
    description: this.description
  };

  constructor(public dialog: MatDialog, private router: Router) {
    this.emptyCart = (JSON.parse(localStorage.getItem('myCart')) == null)? false: true;
    console.log(this.cartItems, this.emptyCart);

  }

  getPriceDescription() {
    if (this.emptyCart) {
      this.cartItems.products.forEach(element => {
        this.totalPrice = this.totalPrice + element.productPrice;
        this.description = (this.description === '') ?
          this.description + element.productName + '(x' + element.productQuantity + ')' :
          this.description + ', ' + element.productName + '(x' + element.productQuantity + ')';
      });
      console.log(this.totalPrice, this.description);
    }
  }


  ngOnInit() {
    this.cartItems = (JSON.parse(localStorage.getItem('myCart')) == null)? ['']: (JSON.parse(localStorage.getItem('myCart')));
    this.getPriceDescription();
  }

  async initPaypal() {
    await paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.description,
              amount: {
                currency_code: 'USD',
                value: this.totalPrice
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        this.removeCartItems();
        this.router.navigateByUrl('/inicio');
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    })
    .render(this.paypal.nativeElement);
  }

  savePhoneNumber() {
    if (this.emptyCart) {
      setTimeout(() => {
        this.initPaypal();
      }, 1000); 
    }
    this.numberSaved = true;
    this.description = this.description + 
    ' - Número de contacto del cliente: ' + this.clientPhoneNumber
    console.log(this.description);
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

  removeCartItems() {
    localStorage.removeItem('myCart');
  }

}
