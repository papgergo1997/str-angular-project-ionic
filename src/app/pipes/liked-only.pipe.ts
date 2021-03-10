import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'likedOnly'
})
export class LikedOnlyPipe implements PipeTransform {

  transform(users: User[] | null, liked: boolean): User[] | null {
    if (!Array.isArray(users) || !liked) {
      return users
    }
    return users.filter(item => liked === item.liked)
  }
}
