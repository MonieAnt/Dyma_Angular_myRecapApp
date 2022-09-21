import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Home :
import { HomeComponent } from './home/home.component';

// Shared :
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';

// Chapter 2 :
import { CompoComponent } from './demo/chapter2/2.1_composants/compo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CompoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
