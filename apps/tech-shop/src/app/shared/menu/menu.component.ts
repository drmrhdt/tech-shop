import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Category } from '../../../models/index';
import { setCategories } from './menu.actions';
import { selectCategories } from './menu.selectors';

@Component({
  selector: 'tech-shop-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();

  openMap: { [name: string]: boolean } = {
    sub0: false,
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getCategories();
    this.categories$ = this.store.select(selectCategories);
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  async getCategories(): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/categories`
    );
    const items = await answer.json();
    this.store.dispatch(setCategories({ categories: items.data }));
  }
}
