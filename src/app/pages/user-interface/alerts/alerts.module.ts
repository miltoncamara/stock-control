import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AlertsComponent } from "./alerts.component";

const ALERTS_ROUTES = [
    { path: '', component: AlertsComponent }
];

@NgModule ({
    declarations: [
        AlertsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot(),
        RouterModule.forChild(ALERTS_ROUTES)
    ]
})

export class AlertsModule {  }