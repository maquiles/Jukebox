import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuItem } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CreateJukeboxComponent } from './components/createJukebox/createJukebox';
import { HeaderComponent } from './components/header/header';
import { JukeboxComponent } from './components/jukebox/jukebox';
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
    CreateJukeboxComponent,
    JukeboxComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    TabMenuModule
  ],
  providers: [
    //not at this point yet, no backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }