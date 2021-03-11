import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Connection } from '../model/connection';
import { User } from '../model/user';
import { ConnectionService } from '../service/connection.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {

  connectedUsers$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users: User[] = [];
  connectionNumbers: number[] = [];
  currentUser: number = 31;
  connections: Connection[] = this.connectionService.usersConnection;
  constructor(private userService: UserService, private connectionService: ConnectionService) {
    this.connectionService.getConnection(this.currentUser);
  }

  ngOnInit() {

    setTimeout(() => {
      this.getUserIds()
      this.getConnectedUsers()
    }, 500);


  }
  getConnectedUsers(): void {
    this.connectionNumbers.forEach((item) => {
      if (item == this.currentUser) {
        return
      }
      this.userService.get(item).subscribe((user) => this.users.push(user))
    });
    this.connectedUsers$.next(this.users);
  }
  getUserIds(): void {
    this.connections.forEach((item) => {
      this.connectionNumbers.push(item.user2)
      this.connectionNumbers.push(item.user1)
    })
  }

}
