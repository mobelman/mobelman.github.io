import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { Product } from '../../shared/product.model';
import { PRIVATE_PRODUCTS } from '../shared/private-products';

@Component({
  selector: 'app-private-product',
  imports: [ FooterComponent ],
  templateUrl: './private-product.component.html',
  styleUrl: './private-product.component.css'
})
export class PrivateProductComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.product = PRIVATE_PRODUCTS.find(item => item.id === id);
  }
}
