import { Component, OnInit, Output } from '@angular/core';
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

  accepted: boolean = true;
  @Output() currentUser: number = 31;
  connections: BehaviorSubject<Connection[]> = this.connectionService.list$;
  constructor(private userService: UserService, private connectionService: ConnectionService) {
    this.connectionService.getConnection();
  }

  ngOnInit() {
    this.connectionService.getAll()
  }

}
