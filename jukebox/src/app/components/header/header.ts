import { Component } from '@angular/core';

import { MenuItem } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class HeaderComponent {
    items: MenuItem[] = [
        {label: 'Log In', icon: 'fa-at'},
        {label: 'Profile', icon: 'fa-user-circle-o'},
        {label: 'Notifications', icon: 'fa-comment'},
        {label: 'Open Jukeboxes', icon: 'fa-music'},
        {label: 'Saved Jukeboxes', icon: 'fa-lock'}
    ]

    constructor() {}
}