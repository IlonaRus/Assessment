import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centsToMonetaryUnit'
})
export class CentsToMonetaryUnitPipe implements PipeTransform {

  transform(value: number): unknown | number {
    if (!value) {
      return value;
    }
    return value / 100;
  }
}
