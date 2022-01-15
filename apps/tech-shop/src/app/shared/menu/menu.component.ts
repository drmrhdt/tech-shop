import { Component, OnInit } from '@angular/core';

import { Category } from '../../../models/index';

@Component({
  selector: 'tech-shop-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];

  openMap: { [name: string]: boolean } = {
    sub0: false,
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false,
  };

  ngOnInit(): void {
    this.getCategories();
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
    this.categories = items.data;
  }
}
