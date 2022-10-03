import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Home :
import { HomeComponent } from './home/home.component';

// Shared :
import { NavbarComponent } from './shared/navbar/navbar.component';

// Chapter 2 :
import { CompoComponent } from './demo/chapter2/2.1_composants/compo.component';
import { TemplateComponent } from './demo/chapter2/2.2_templates/template.component';
import { DataBindingComponent } from './demo/chapter2/2.3_dataBinding/data-binding.component';

// Chapter 3 :
import { MyCocktailAppComponent } from './demo/chapter3/my-cocktail-app/my-cocktail-app.component';
import { CocktailListComponent } from './demo/chapter3/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './demo/chapter3/cocktail-details/cocktail-details.component';

// Chapter 4 :
import { InputComponent } from './demo/chapter4/input/input.component';
import { OutputComponent } from './demo/chapter4/output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    // Chapter 2
    CompoComponent,
    TemplateComponent,
    DataBindingComponent,

    // Chapter 3
    MyCocktailAppComponent,
    CocktailListComponent,
    CocktailDetailsComponent,

    // Chapter 4
    InputComponent,
    OutputComponent
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
