import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
  transform(num: number, variants: string[]) {
    let count = num % 100;
    if (count >= 5 && count <= 20) {
      return variants['2'];
    }
    count = count % 10;
    if (count === 1) {
      return variants['0'];
    }
    if (count >= 2 && count <= 4) {
      return variants['1'];
    }
    return variants['2'];
  }
}
