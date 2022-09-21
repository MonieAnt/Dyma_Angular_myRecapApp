import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CompoComponent } from './demo/chapter2/2.1_composants/compo.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  // Path imbriqué :
  {path:"demo", children : [
    {path: "2.1_compo", component: CompoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
