import { Component, Input } from '@angular/core';

@Component({
  selector: 'tech-shop-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() length = 0;

  readonly MAX_STARS = 5;
}
