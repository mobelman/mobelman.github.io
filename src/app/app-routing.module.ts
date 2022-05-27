import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChurchComponent} from './churches/church/church.component';
import {ProductionComponent} from './production/production.component';
import {ContactComponent} from './contact/contact.component';
import {PublicProductsComponent} from './public-products/public-products.component';
import {PublicProductComponent} from './public-products/public-product/public-product.component';
import {PublicChurchProductsComponent} from './public-church-products/public-church-products.component';
import {PublicChurchProductComponent} from './public-church-products/public-church-product/public-church-product.component';
import {PrivateProductsComponent} from './private-products/private-products.component';
import {PrivateProductComponent} from './private-products/private-product/private-product.component';

const routes: Routes = [
  {path: 'churches/:location/:name', component: ChurchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'private/products', component: PrivateProductsComponent},
  {path: 'private/products/:id', component: PrivateProductComponent},
  {path: 'production', component: ProductionComponent},
  {path: 'public/church/products', component: PublicChurchProductsComponent},
  {path: 'public/church/products/:id', component: PublicChurchProductComponent},
  {path: 'public/products', component: PublicProductsComponent},
  {path: 'public/products/:id', component: PublicProductComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
