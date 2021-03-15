import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { PhotoService } from '../service/photo.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { LocationService } from '../service/location.service';
import { Location } from '../model/location';
import { Interest } from '../model/interest';
import { InterestService } from '../service/interest.service';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  location: Location = new Location();
  interest: Interest = new Interest();
  submitted: boolean = false;
  currentUser: string = 'aHYQeMCvZD7qV05retF6';


  constructor(public photoService: PhotoService, private userService: UserService, private locationService: LocationService, private interestService: InterestService) {
    this.userService.get(this.currentUser).subscribe((user) => {
      this.user = user;
      this.locationService.get(user.location).subscribe((location) => this.location = location)
      this.interestService.get(user.interest).subscribe((interest) => this.interest = interest)
    })

  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  onUpdate(form: NgForm, user: User, location: Location): void {
    this.submitted = true
    setTimeout(() => {
      this.submitted = false
    }, 500);
    console.log(user.id)
    this.userService.update(user);
    this.locationService.update(location)
  }

}
