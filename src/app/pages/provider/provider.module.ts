import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { ProviderComponent } from "./provider.component";

const PROVIDER_ROUTES = [
    { path: '', component: ProviderComponent }
];

@NgModule ({
    declarations: [
        ProviderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PROVIDER_ROUTES)
    ]
})

export class ProviderModule {  }