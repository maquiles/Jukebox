import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { LoginComponent } from './components/login/login';
import { NotificationsComponent } from './components/notifications/notifications';
import { OpenJukeboxesComponent } from './components/openJukeboxes/openJukeboxes';
import { ProfileComponent } from './components/profile/profile'
import { SavedJukeboxesComponent } from './components/savedJukeboxes/savedJukeboxes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NotificationsComponent,
    OpenJukeboxesComponent,
    ProfileComponent,
    SavedJukeboxesComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //not at this point yet, no backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }