import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tech-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) =>
      this.getProductList(params.categoryName)
    );
  }

  async getProductList(subcategory: string): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/?subCat=${subcategory}`
    );
    const data = await answer.json();
  }
}
