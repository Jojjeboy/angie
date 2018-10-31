import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatStr'
})
export class ConcatStrPipe implements PipeTransform {

  transform(value: string, strLength: number, dots: boolean): string {
    let newStr = '';

    if (value.length > strLength) {

      for (let i: any = 0; i < strLength; i++) {
          newStr += value.charAt(i);
      }

      if (dots === true) {
        newStr += '...';
      }

      return newStr;
    }
    return value;
  }

}
