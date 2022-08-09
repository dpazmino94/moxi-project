import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

// Prime NG Imports
import { GalleriaModule } from 'primeng/galleria';

// Components Imports
import { CommonDialogComponent } from './common/dialog/common-dialog/common-dialog.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { ProductItemComponent } from './product-item/product-item.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MyCartComponent } from './my-cart/my-cart.component';
import { GridBannerComponent } from './grid-banner/grid-banner.component';
import { OverlapImageComponent } from './overlap-image/overlap-image.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { WhatIsCbdComponent } from './what-is-cbd/what-is-cbd.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { MenuComponent } from './menu/menu.component';
import { SliderTextComponent } from './slider-text/slider-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonDialogComponent,
    OnlineStoreComponent,
    ProductItemComponent,
    MyCartComponent,
    GridBannerComponent,
    OverlapImageComponent,
    MoreInfoComponent,
    WhatIsCbdComponent,
    HowItWorksComponent,
    MenuComponent,
    SliderTextComponent,
  ],
  exports: [
    MatFormFieldModule
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    GalleriaModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  entryComponents: [CommonDialogComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
