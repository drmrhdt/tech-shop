import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Product } from '../../../models';
import { selectProducts } from '../products.selectors';
import { ProductActions } from '../action-types';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'tech-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable();

  constructor(private store: Store, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params
      .pipe(untilDestroyed(this))
      .subscribe(() =>
        this.store.dispatch(
          ProductActions.loadAllProductsAccordingToSubcategory()
        )
      );
    this.products$ = this.store.select(selectProducts);
  }
}
