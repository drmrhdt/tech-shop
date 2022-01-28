import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Product } from '../../../models';
import {
  selectIsLoading,
  selectProducts,
  selectMaxPrice,
  selectMinPrice,
  selectBrands,
} from '../products.selectors';
import { ProductActions } from '../action-types';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'tech-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable();
  brands$: Observable<string[] | undefined> = new Observable();
  isLoading$: Observable<boolean> = new Observable();

  minPrice$: Observable<number> = new Observable();
  maxPrice$: Observable<number> = new Observable();

  form: FormGroup;

  get brands() {
    return this.form.get('brands');
  }

  constructor(
    private store: Store,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      filterString: '',
      brands: new FormArray([]),
      min: 0,
      max: 0,
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.warn);

    this._route.params
      .pipe(untilDestroyed(this))
      .subscribe(() =>
        this.store.dispatch(
          ProductActions.loadAllProductsAccordingToSubcategory()
        )
      );
    this.products$ = this.store.select(selectProducts);
    this.brands$ = this.store.select(selectBrands);
    this.isLoading$ = this.store.select(selectIsLoading);

    this.minPrice$ = this.store.select(selectMinPrice);
    this.maxPrice$ = this.store.select(selectMaxPrice);
  }

  checkBrand(brand: string): void {
    if (this.brands?.value.includes(brand)) {
      const brandIndex = this.brands?.value.findIndex(
        (b: string) => b === brand
      );
      (this.brands as FormArray).removeAt(brandIndex);
    } else {
      (this.brands as FormArray).push(new FormControl(brand));
    }
  }
}
