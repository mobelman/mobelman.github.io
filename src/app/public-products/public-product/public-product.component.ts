import {Component, OnInit} from '@angular/core';
import {PublicProduct} from '../shared/public-product.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PUBLIC_PRODUCTS} from '../shared/public-products';

@Component({
  selector: 'app-public-product',
  templateUrl: './public-product.component.html',
  styleUrls: ['./public-product.component.css']
})
export class PublicProductComponent implements OnInit {

  publicProduct: PublicProduct;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.publicProduct = PUBLIC_PRODUCTS.find(item => item.id === id);
  }
}
