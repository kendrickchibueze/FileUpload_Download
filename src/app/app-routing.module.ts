import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadImageComponent} from "./components/upload-image/upload-image.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";

const routes: Routes = [

  { path : '', component:UploadImageComponent },
  { path : 'welcome', component:WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
