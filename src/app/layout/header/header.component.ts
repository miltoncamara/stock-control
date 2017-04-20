import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {
    messagesData: Array<any>;
    tasksData: Array<any>;

    constructor() {

        this.messagesData = [
            {
                image: './assets/demo/img/profile-pics/1.jpg',
                name: 'David Belle',
                message: 'Cum sociis natoque penatibus et magnis dis parturient montes'
            },
            {
                image: './assets/demo/img/profile-pics/2.jpg',
                name: 'Jonathan Morris',
                message: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
            },
            {
                image: './assets/demo/img/profile-pics/6.jpg',
                name: 'Fredric Mitchell Jr.',
                message: 'Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies'
            },
            {
                image: './assets/demo/img/profile-pics/4.jpg',
                name: 'Glenn Jecobs',
                message: 'Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque'
            },
            {
                image: './assets/demo/img/profile-pics/5.jpg',
                name: 'Bill Phillips',
                message: 'Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat'
            }
        ];

        this.tasksData = [
            {
                name: 'HTML5 Validation Report',
                completed: 95,
                color: ''
            },{
                name: 'Google Chrome Extension',
                completed: '80',
                color: 'success'
            },{
                name: 'Social Intranet Projects',
                completed: '20',
                color: 'warning'
            },{
                name: 'Bootstrap Admin Template',
                completed: '60',
                color: 'danger'
            },{
                name: 'Youtube Client App',
                completed: '80',
                color: 'info'
            }
        ]
    }

    ngOnInit() {

    }
}
