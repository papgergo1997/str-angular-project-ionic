import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionsComponent } from '../connections/connections.component';
import { Connection } from '../model/connection';
import { User } from '../model/user';
import { ConnectionService } from '../service/connection.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User = new User();
  @Input() connection: Connection = new Connection();
  @Input() all: boolean = false;
  @Input() currentUser: number = 0;
  user2: User = new User();

  constructor(private userService: UserService, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getUserFromConnection()
  }

  onLike(boolean: boolean, user: User) {
    user.liked = boolean;
    this.userService.update(user)
  }
  onDisLike(boolean: boolean, user: User) {
    user.liked = boolean;
    this.userService.update(user).subscribe(
      () => this.userService.getAll()
    )
  }
  onDisLikeWhenAllSeen(boolean: boolean, user: User): void {
    user.showed = boolean;
    this.userService.update(user).subscribe(
      () => this.userService.getAll()
    )
  }
  onDeleteConnection(connection: Connection): void {
    this.connectionService.remove(connection).subscribe(
      () => this.connectionService.getConnection()
    )
  }
  getUserFromConnection(): void {
    if (this.user.id == 0) {
      this.userService.get(this.connection.user2).subscribe((user) => this.user2 = user);
      setTimeout(() => {
        this.user = this.user2
      }, 300);
    } else {
      return
    }
  }
}
