import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { ProductComponent } from "./product.component";

const PRODUCT_ROUTES = [
    { path: '', component: ProductComponent }
];

@NgModule ({
    declarations: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(PRODUCT_ROUTES)
    ]
})

export class ProductModule {  }