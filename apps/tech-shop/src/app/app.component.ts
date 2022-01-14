import { Component } from '@angular/core';

import { categories } from '../mock/nav_structure';

@Component({
  selector: 'tech-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tech-shop';
  categories = categories;

  openMap: { [name: string]: boolean } = {
    sub0: false,
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false,
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
