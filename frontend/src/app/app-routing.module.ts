import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortUrlComponent } from './components/pages/short-url/short-url.component';
import { UnshortUrlComponent } from './components/pages/unshort-url/unshort-url.component';
import { UrlAnalalyticsComponent } from './components/pages/url-analalytics/url-analalytics.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  {path:'', component:ShortUrlComponent },
  {path:'short-url',component:ShortUrlComponent},
  {path:'unshort-url', component:UnshortUrlComponent}, 
  {path:'url-clicks-counter',component:UrlAnalalyticsComponent},
  {path:'home', redirectTo:'/', pathMatch:'full'},
  {path:':id', component:ShortUrlComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
