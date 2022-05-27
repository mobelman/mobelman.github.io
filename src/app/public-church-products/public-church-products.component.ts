import {Component, OnInit} from '@angular/core';
import {PUBLIC_CHURCH_PRODUCTS} from './shared/public-church-products';

@Component({
  selector: 'app-public-church-products',
  templateUrl: './public-church-products.component.html',
  styleUrls: ['./public-church-products.component.css']
})
export class PublicChurchProductsComponent implements OnInit {

  publicChurchProducts = PUBLIC_CHURCH_PRODUCTS;

  constructor() {
  }

  ngOnInit() {
  }
}
