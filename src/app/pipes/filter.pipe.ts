import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  user: User = new User()
  keys: string[] = Object.keys(this.user);

  transform(value: any[] | null, phrase: string | number | boolean): any[] | null {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    //Works, its not nice but works!!!
    return value.filter(item => {
      if (typeof item === 'number' && typeof phrase === 'number') {
        return item === phrase;
      } else {
        return ('' + item[this.keys[1]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.keys[2]]).toLowerCase().startsWith((phrase as string)) ||
          ('' + item[this.keys[3]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.keys[4]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.keys[5]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.keys[6]]).toLowerCase().includes((phrase as string));
      }
    })
  }

}
