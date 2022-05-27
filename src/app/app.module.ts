import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChurchesComponent} from './churches/churches.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductionComponent} from './production/production.component';
import {ChurchComponent} from './churches/church/church.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PublicProductsComponent} from './public-products/public-products.component';
import {PublicChurchProductsComponent} from './public-church-products/public-church-products.component';
import {PublicProductComponent} from './public-products/public-product/public-product.component';
import {PublicChurchProductComponent} from './public-church-products/public-church-product/public-church-product.component';
import {ContactComponent} from './contact/contact.component';
import {PrivateProductComponent} from './private-products/private-product/private-product.component';
import {PrivateProductsComponent} from './private-products/private-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ChurchesComponent,
    ChurchComponent,
    ContactComponent,
    DashboardComponent,
    ProductionComponent,
    FooterComponent,
    PublicProductsComponent,
    PublicChurchProductsComponent,
    PublicProductComponent,
    PublicChurchProductComponent,
    PrivateProductComponent,
    PrivateProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
