import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingModule } from './booking/booking.module';


import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, BookingModule, 
    RouterModule.forRoot([{ path: '', redirectTo: "/", pathMatch:'full'}])],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})

export class AppModule { }