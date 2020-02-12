import { Injectable } from '@angular/core';
import { GeneralCartModel, ItemCartModel } from '../Models/GeneralModels';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

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

}
