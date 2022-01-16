import { Component } from '@angular/core';
import { Category, Suggestion } from '../../models';

@Component({
  selector: 'tech-shop-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  categories: Category[] = [];
  suggestions: Suggestion[] = [];

  ngOnInit(): void {
    this.getRandomSuggestions();
    this.getCategories();
  }

  async getRandomSuggestions(): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/products/suggestion`
    );
    const items = await answer.json();
    this.suggestions = items.data.items;
  }

  async getCategories(): Promise<void> {
    const answer = await fetch(
      `https://course-angular.javascript.ru/api/categories`
    );
    const items = await answer.json();
    this.categories = items.data;
  }
}
