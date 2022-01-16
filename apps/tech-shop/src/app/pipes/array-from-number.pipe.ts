import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFromNumber',
})
export class ArrayFromNumberPipe implements PipeTransform {
  transform(value: number): number[] {
    const a = [];
    while (value > 0) {
      a.push(1);
      value--;
    }
    return a;
  }
}
