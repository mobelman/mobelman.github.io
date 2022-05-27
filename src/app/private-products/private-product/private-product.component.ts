import {Component, OnInit} from '@angular/core';
import {PrivateProduct} from '../shared/private-product.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PRIVATE_PRODUCTS} from '../shared/private-products';

@Component({
  selector: 'app-private-product',
  templateUrl: './private-product.component.html',
  styleUrls: ['./private-product.component.css']
})
export class PrivateProductComponent implements OnInit {

  privateProduct: PrivateProduct | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.privateProduct = PRIVATE_PRODUCTS.find(item => item.id === id);
  }
}
