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

  @Input() notAccepted: boolean = false;
  @Input() user: User = new User();
  @Input() connection: Connection = new Connection();
  @Input() all: boolean = false;
  @Input() currentUser: string = '';
  background: string = 'female';
  user2: User = new User();
  user1: string = 'aHYQeMCvZD7qV05retF6'


  constructor(private userService: UserService, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getUserFromConnection();
    this.createUserBackground();
  }

  onLike(liked: boolean, showed: boolean, user: User) {
    user.liked = liked;
    user.showed = showed;
    // this.connectionService.create({
    //   user1: this.user1,
    //   user2: user.id,
    //   accepted: false
    // })
    this.userService.update(user)
  }
  onDisLike(boolean: boolean, user: User) {
    user.liked = boolean;
    this.userService.update(user)
  }
  onDisLikeWhenAllSeen(boolean: boolean, user: User): void {
    user.showed = boolean;
    this.userService.update(user)
  }
  onDeleteConnection(connection: Connection): void {
    this.connectionService.remove(connection);
  }
  onAcceptConnection(connection: Connection, user: User): void {
    connection.accepted = true;
    this.connectionService.update(connection);
    user.liked = true;
    user.showed = false;
    this.userService.update(user);
  }
  getUserFromConnection(): void {
    if (this.user.id == '') {
      this.userService.get(this.connection.user2).subscribe((user) => this.user = user);
    } else {
      return
    }

  }
  createUserBackground(): void {
    if (this.user.gender == 'male') {
      this.background = 'male'
    }
  }

}
