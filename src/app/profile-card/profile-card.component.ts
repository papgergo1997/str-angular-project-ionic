import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User[] = [];
  @Input() all: boolean = false;
  constructor() { }

  ngOnInit() { }

}
