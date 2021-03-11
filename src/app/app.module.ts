import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LikedOnlyPipe } from './pipes/liked-only.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ShowedPipe } from './pipes/showed.pipe';
import { ShowLatestPipe } from './pipes/show-latest.pipe';
@NgModule({
  declarations: [AppComponent, ProfileCardComponent, HomeComponent, ConnectionsComponent, ProfileComponent, LikedOnlyPipe, FilterPipe, ShowedPipe, ShowLatestPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
