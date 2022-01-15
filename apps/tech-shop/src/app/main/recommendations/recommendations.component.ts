import { Component, OnInit } from '@angular/core';

import { Category } from '../../../models/index';
import { Suggestion } from '../../../models/index';

@Component({
  selector: 'tech-shop-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  categories: Category[] = [];
  suggestions: Suggestion[] = [];

  ngOnInit(): void {
    this.getRandomSuggestions();
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
