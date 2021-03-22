import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showNotAccepted'
})
export class ShowNotAcceptedPipe implements PipeTransform {

  transform(value: any[] | null, notAccepted: boolean): any[] | null {
    if (!Array.isArray(value) || notAccepted) {
      return
    } else {
      return value.filter((item) => notAccepted === item.accepted)
    }
  }

}
