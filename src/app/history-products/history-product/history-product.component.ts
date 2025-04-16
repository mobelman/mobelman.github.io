import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { Product } from '../../shared/product.model';
import { HISTORY_PRODUCTS } from '../shared/history-products';

@Component({
  selector: 'app-history-product',
  imports: [ FooterComponent ],
  templateUrl: './history-product.component.html',
  styleUrl: './history-product.component.css'
})
export class HistoryProductComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.product = HISTORY_PRODUCTS.find(item => item.id === id);
  }
}
