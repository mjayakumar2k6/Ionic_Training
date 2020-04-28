import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNewPage'
})
export class MyNewPagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
