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
    //this.tempCreate()
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
      description: 'Nuestro bálsamo de CBD Relief + Recovery es una mezcla vigorizante de extracto de cáñamo de espectro completo e ingredientes funcionales como capsaicina y mentol, elaborado para aliviar dolores y molestias con su sensación refrescante/caliente. Nuestras fórmulas de bálsamo nuevas y mejoradas brindan un alivio sostenido del dolor muscular y la inflamación localizados, al mismo tiempo que nutren la piel y brindan apoyo a su cuerpo y mente. Este tópico profundamente refrescante combina bien con estilos de vida activos y recuperación sobre la marcha.<br/><br/>Ingredientes: Cera Alba orgánica (cera de abeja), aceite de semilla de Simmondsia Chinensis (jojoba) orgánico, aceite de semilla de Helianthus Annuus (girasol) orgánico, mantequilla de semilla de Mangifera Indica (mango) orgánica, lanolina, extracto de cáñamo de espectro completo, mentol, aceite de corteza de Cinnamomum Camphora, Aceite de Ocimum basilicum (albahaca dulce), aceite de hoja natural de Gaultheria procumbens (gaulteria), miristato de isopropilo, extracto de Capsicum annuum. Fabricado en una instalación que procesa frutos secos.',
      howToUse: 'Consulte a su médico antes de usar si le han desaconsejado comer toronja. No lo use si el sello de seguridad está roto. Sólo para uso externo<br/><br/>Aplicar según sea necesario en las áreas objetivo para un alivio duradero. Nuestros bálsamos son probados por terceros para potencia, pesticidas y metales pesados. Nuestro proceso de prueba garantiza que ofrecemos un producto que es natural, seguro y consistente. Todos los resultados de las pruebas están disponibles en la pestaña Resultados de la prueba.',
      images: ['https://i.imgur.com/WNl3tHj.jpg', 'https://i.imgur.com/FgWRwIj.jpg', 'https://i.imgur.com/rDvGiu4.jpg'],
      nombre: 'CBD Balm - Relief + Recovery',
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


//https://i.imgur.com/eJPUP44.jpg







