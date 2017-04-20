import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

    // Sidebar visibility
    sidebarVisible: boolean;
    sidebarVisibilitySubject: Subject<boolean> = new Subject<boolean>();

    constructor()  {
        this.sidebarVisible = false
    }

    toggleSidebarVisibilty() {
        this.sidebarVisible = !this.sidebarVisible
        this.sidebarVisibilitySubject.next(this.sidebarVisible);
    }
}