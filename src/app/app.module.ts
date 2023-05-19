import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgToastModule} from "ng-angular-popup";
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatTableModule} from "@angular/material/table";
import {CdkColumnDef, CdkTableModule} from "@angular/cdk/table";

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    NgToastModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [ CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
