import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User = new User();
  @Input() all: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() { }

  onLike(boolean: boolean, user: User) {
    user.liked = boolean
    this.userService.update(user).subscribe(
      () => this.userService.getAll()
    )
  }

}
