import { Component, OnInit } from '@angular/core';

interface Category {
  name: string;
  _id: string;
  subCategories: { category: string; name: string; _id: string }[];
}

interface Suggestion {
  feedbacksCount: number;
  images: { source: string; url: string }[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  _id: string;
}
@Component({
  selector: 'tech-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tech-shop';
  categories: Category[] = [];
  suggestions: Suggestion[] = [];

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
    this.getRandomSuggestions();
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  async getCategories() {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/categories`
    );
    const items = await answer.json();
    this.categories = items.data;
  }

  async getRandomSuggestions() {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/suggestion`
    );
    const items = await answer.json();
    this.suggestions = items.data.items;
  }
}
