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
  @Output() currentUser: string = 'aHYQeMCvZD7qV05retF6';
  @Output() all: boolean = true;
  connections: Observable<Connection[]> = this.connectionService.list$;
  constructor(private userService: UserService, private connectionService: ConnectionService) {

  }

  ngOnInit() {

  }

}
