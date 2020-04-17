import { Injectable } from '@angular/core';
import { GeneralCartModel, ItemCartModel } from '../Models/GeneralModels';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CART_CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  /**
   * This adds an object to the cart
   *
   * @param {*} object
   * @memberof CartService
   */
  addToCart(object: any) {
    let generalCart: GeneralCartModel = new GeneralCartModel();
    generalCart.products = [];
    if (localStorage.getItem('myCart')) {
      let otherProducts: any;
      otherProducts = JSON.parse(localStorage.getItem('myCart'));
      generalCart.products = otherProducts.products;
    }
    generalCart.products.push(object);
    localStorage.removeItem('myCart')
    localStorage.setItem('myCart', JSON.stringify(generalCart));
    let item = JSON.parse(localStorage.getItem('myCart'));
    console.log(item);
  }

  /**
   * This updates an item of the cart
   *
   * @param {*} object
   * @param {number} index
   * @memberof CartService
   */
  updateCart(object: any, index: number) {
    let item = JSON.parse(localStorage.getItem('myCart'));
    item.products[index].productQuantity = object.productQuantity;
    item.products[index].productPrice = object.productPrice;
    localStorage.removeItem('myCart');
    localStorage.setItem('myCart', JSON.stringify(item));
    let aux = JSON.parse(localStorage.getItem('myCart'));
    console.log(aux);
  }

  /**
   * This reads the item on the cart and decides what to do
   *
   * @param {*} object
   * @memberof CartService
   */
  readCartObject(object: any) {
    let duplicatedId = false;
    let item = JSON.parse(localStorage.getItem('myCart'));
    if (item) {
      item.products.forEach((element, index) => {
        if (element.productId === object.productId) {
          this.updateCart(object, index);
          duplicatedId = true;
        }
      });
    }
    if (!duplicatedId) {
      this.addToCart(object);
    }
  }

  /**
   * This calls the Payphone API for the payment
   *
   * @param {*} totalPrice
   * @param {*} clientPhoneNumber
   * @param {*} clientMail
   * @returns
   * @memberof CartService
   */
  payPhoneCall(totalPrice, clientPhoneNumber, clientMail) {
    const body = {

      "amount": totalPrice,
      "amountWithoutTax": totalPrice,
      "clientTransactionId": clientPhoneNumber,
      "responseUrl": "https://cannabidiolecuador.com/inicio",
      "phoneNumber": clientPhoneNumber,
      "email": clientMail,
      "optionalParameter": "https://cannabidiolecuador.com/inicio",
      "documentId": "string"

    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + CART_CONSTANTS.PAYPHONE_BEAR
      })
    };
    return this.http.post('https://pay.payphonetodoesposible.com/api/button/Prepare', body, httpOptions);
  }

}
