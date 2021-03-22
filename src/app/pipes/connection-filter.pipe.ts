import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Pipe({
  name: 'connectionFilter'
})
export class ConnectionFilterPipe implements PipeTransform {

  currentUser: string = 'aHYQeMCvZD7qV05retF6';
  some: any;
  user: User;

  constructor(private useService: UserService) {
    this.useService.get(this.currentUser).subscribe((user) => this.user = user);
  }

  transform(value: any[] | null): any[] | null {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.filter((item) => {
      if (this.user.gender == 'male' && (this.user.age > 20 && this.user.age < 30)) {
        return ('' + item.gender).toLowerCase().includes(('female' as string)) && (item.age < 30 && item.age > 20)
      } else if (this.user.gender == 'male' && (this.user.age > 30 && this.user.age < 40)) {
        return ('' + item.gender).toLowerCase().includes(('female' as string)) && (item.age < 40 && item.age > 30)
      } else if (this.user.gender == 'female' && (this.user.age > 30 && this.user.age < 40)) {
        return ('' + item.gender).toLowerCase().startsWith(('male' as string)) && (item.age < 40 && item.age > 30)
      } else if (this.user.gender == 'female' && (this.user.age > 20 && this.user.age < 30)) {
        return ('' + item.gender).toLowerCase().startsWith(('male' as string)) && (item.age < 30 && item.age > 20)
      }
    })

  }

}
