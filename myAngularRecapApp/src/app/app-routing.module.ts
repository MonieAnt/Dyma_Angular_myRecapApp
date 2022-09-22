import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";

// Chapter 2
import { CompoComponent } from './demo/chapter2/2.1_composants/compo.component';
import { TemplateComponent } from './demo/chapter2/2.2_templates/template.component';
import { DataBindingComponent } from './demo/chapter2/2.3_dataBinding/data-binding.component';

// Chapter 3
import { MyCocktailAppComponent } from './demo/chapter3/my-cocktail-app/my-cocktail-app.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  // Path imbriqué :
  {path:"demo", children : [
    // Chapter 2
    {path: "2.1_compo", component: CompoComponent},
    {path: "2.2_template", component: TemplateComponent},
    {path: "2.3_dataBinding", component: DataBindingComponent},

    // Chapter 3
    {path: "3_myCocktailApp", component: MyCocktailAppComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
