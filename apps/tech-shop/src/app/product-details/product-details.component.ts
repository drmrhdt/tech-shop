import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDetails } from '../../models/productDetails';

@Component({
  selector: 'tech-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductDetails | null = null;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(({ productName }) =>
      this.getProductDetails(productName)
    );
  }

  async getProductDetails(productName: string): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/${productName}`
    );
    const data = await answer.json();
    this.product = data.data;
  }
}
