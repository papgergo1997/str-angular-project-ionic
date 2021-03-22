import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'connectionFilter'
})
export class ConnectionFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
