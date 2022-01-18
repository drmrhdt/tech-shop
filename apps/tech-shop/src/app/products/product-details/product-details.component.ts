import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ProductDetails } from '../../../models/productDetails';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'tech-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // product: ProductDetails | null = null;
  product: any;
  isShowAllCharacteristics = false;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params
      .pipe(untilDestroyed(this))
      .subscribe(({ productName }) => this.getProductDetails(productName));
  }

  async getProductDetails(productName: string): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/${productName}`
    );
    const data = await answer.json();
    this.product = data.data;
  }

  generateArrayFromNumber(n: number) {
    const a = [];
    while (n > 0) {
      a.push(1);
      n--;
    }
    return a;
  }
}
