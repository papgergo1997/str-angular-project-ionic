import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  user: User = new User()
  key: string[] = Object.keys(this.user);
  thisKey: string = 'name';

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
        return ('' + item[this.key[1]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.key[2]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.key[3]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.key[4]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.key[5]]).toLowerCase().includes((phrase as string)) ||
          ('' + item[this.key[6]]).toLowerCase().includes((phrase as string));
      }
    })
  }

}
