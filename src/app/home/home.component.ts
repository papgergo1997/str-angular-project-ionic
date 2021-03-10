import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Output() all: boolean = true;
  userList$: BehaviorSubject<User[]> = this.userService.list$;
  phrase: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() { }

}
