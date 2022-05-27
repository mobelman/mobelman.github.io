import {Component, OnInit} from '@angular/core';
import {PRIVATE_PRODUCTS} from './shared/private-products';

@Component({
  selector: 'app-private-products',
  templateUrl: './private-products.component.html',
  styleUrls: ['./private-products.component.css']
})
export class PrivateProductsComponent implements OnInit {

  privateProducts = PRIVATE_PRODUCTS;

  constructor() {
  }

  ngOnInit() {
  }
}
