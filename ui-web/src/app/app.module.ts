import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayDialogComponent } from './display-dialog/display-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    DisplayDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , MatDialogModule
    , MatCardModule
    , MatButtonModule
    , BrowserAnimationsModule
    , HttpClientModule
    //, MatDialog


  ],
  entryComponents: [
    DisplayDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
