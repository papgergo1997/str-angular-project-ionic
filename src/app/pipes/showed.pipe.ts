import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'showed'
})
export class ShowedPipe implements PipeTransform {

  transform(users: User[] | null, showed: boolean): User[] | null {
    if (!Array.isArray(users) || !showed) {
      return users
    }
    return users.filter(item => showed === item.showed)
  }

}
