import { Routes, RouterModule } from '@angular/router';

import { CreateJukeboxComponent } from './components/createJukebox/createJukebox';
import { HeaderComponent } from './components/header/header';
import { JukeboxComponent } from './components/jukebox/jukebox';
import { LoginComponent } from './components/login/login';
import { NotificationsComponent } from './components/notifications/notifications';
import { OpenJukeboxesComponent } from './components/openJukeboxes/openJukeboxes';
import { ProfileComponent } from './components/profile/profile';
import { SavedJukeboxesComponent } from './components/savedJukeboxes/savedJukeboxes';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'createJukebox', component: CreateJukeboxComponent },
    { path: 'jukebox', component: JukeboxComponent },
    { path: 'login', component: LoginComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'openJukeboxes', component: OpenJukeboxesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'savedJukeboes', component: SavedJukeboxesComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);