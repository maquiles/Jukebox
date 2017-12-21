import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'openJukeboxes',
    templateUrl: './openJukeboxes.html',
    styleUrls: ['./openJukeboxes.css']
})
export class OpenJukeboxesComponent {
    open: number[] = [];
    constructor(public router:Router) { 
        //TODO: get all open jukeboxes for user
    }

    openJukebox(){
        //TODO: also need to pass an id through here so that it knows which jukebox to open
        this.router.navigate(['/jukebox']);
    }
}