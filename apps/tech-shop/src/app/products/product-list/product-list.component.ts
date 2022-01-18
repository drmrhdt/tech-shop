import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from '../../../models';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'tech-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params
      .pipe(untilDestroyed(this))
      .subscribe(({ categoryName }) => this.getProductList(categoryName));
  }

  async getProductList(subcategory: string): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/?subCat=${subcategory}`
    );
    const data = await answer.json();
    this.products = data.data.items;
  }
}
