import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { FeedComponent } from './feed/feed.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    FeedComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
