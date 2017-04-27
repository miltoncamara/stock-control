import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SharedService } from "./shared/services/shared.service";

import { AngularFireModule } from 'angularfire2';

import { FirebaseDataService } from './providers/firebase.provider';

export const firebaseConfig = {
    apiKey: "AIzaSyBjmMrBeBNp7BvOmjaiiQ0BVUL1v1DftzA",
    authDomain: "sg-controle-de-estoque.firebaseapp.com",
    databaseURL: "https://sg-controle-de-estoque.firebaseio.com",
    projectId: "sg-controle-de-estoque",
    storageBucket: "sg-controle-de-estoque.appspot.com",
    messagingSenderId: "415254352630"
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        FirebaseDataService,
        SharedService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
