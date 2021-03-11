import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLatest'
})
export class ShowLatestPipe implements PipeTransform {

  transform(value: any[] | null): any[] | null {
    if (!Array.isArray(value)) { return value }
    return value.slice(0, 1);
  }

}
