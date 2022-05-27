import {Component, OnInit} from '@angular/core';
import {PUBLIC_PRODUCTS} from './shared/public-products';

@Component({
  selector: 'app-public-products',
  templateUrl: './public-products.component.html',
  styleUrls: ['./public-products.component.css']
})
export class PublicProductsComponent implements OnInit {

  publicProducts = PUBLIC_PRODUCTS;

  constructor() {
  }

  ngOnInit() {
  }
}
