import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { TimePickerComponent } from "./time-picker.component";

const TIMEPICKER_COMPONENT_ROUTES = [
    { path: '', component: TimePickerComponent }
]

@NgModule ({
    declarations: [
        TimePickerComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TimepickerModule.forRoot(),
        RouterModule.forChild(TIMEPICKER_COMPONENT_ROUTES)
    ]
})

export class TimepickerComponentModule {  }