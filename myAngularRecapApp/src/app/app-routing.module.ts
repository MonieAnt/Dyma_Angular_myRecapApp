import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CompoComponent } from './demo/chapter2/2.1_composants/compo.component';
import { TemplateComponent } from './demo/chapter2/2.2_templates/template.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  // Path imbriqué :
  {path:"demo", children : [
    {path: "2.1_compo", component: CompoComponent},
    {path: "2.2_template", component: TemplateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
