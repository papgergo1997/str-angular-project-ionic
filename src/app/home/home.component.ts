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
  @Output() recommended: boolean = true;
  userList$: Observable<User[]> = this.userService.list$;
  phrase: string = '';
  showed: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() { }

}
