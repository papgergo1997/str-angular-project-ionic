import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAcceptedConnections'
})
export class ShowAcceptedConnectionsPipe implements PipeTransform {

  transform(value: any[] | null, accepted: boolean): any[] | null {
    if (!Array.isArray(value) || !accepted) {
      return
    } else {
      return value.filter((item) => accepted === item.accepted)
    }
  }

}
