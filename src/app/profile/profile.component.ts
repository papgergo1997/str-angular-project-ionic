import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { PhotoService } from '../service/photo.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  submitted: boolean = false;
  currentUser: number = 31;

  constructor(public photoService: PhotoService, private userService: UserService) {
    this.userService.get(31).subscribe((user) => this.user = user)
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
