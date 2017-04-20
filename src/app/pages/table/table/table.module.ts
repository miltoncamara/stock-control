import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

const TABLE_ROUTES: Routes = [
    { path: '', component: TableComponent }
];

@NgModule ({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TABLE_ROUTES)
    ]
})

export class TableModule {  }