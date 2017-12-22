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
        {label: 'Log In', icon: ''},
        {label: 'Profile', icon: ''},
        {label: 'Notifications', icon: ''},
        {label: 'Open Jukeboxes', icon: ''},
        {label: 'Saved Jukeboxes', icon: ''}
    ]

    constructor() {}
}