import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShortUrlComponent } from './components/pages/short-url/short-url.component';
import { UnshortUrlComponent } from './components/pages/unshort-url/unshort-url.component';
import { UrlAnalalyticsComponent } from './components/pages/url-analalytics/url-analalytics.component';
import { ServerErrorsInterceptor } from './auth/auth.interface';
import { ToastrModule } from 'ngx-toastr';
import { UserInterceptorService } from './interceptors/http.interceptors';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { VisitorsCountComponent } from './components/pages/visitors-count/visitors-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShortUrlComponent,
    UnshortUrlComponent,
    UrlAnalalyticsComponent,
    NotFoundComponent,
    VisitorsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      newestOnTop:false
    })
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:ServerErrorsInterceptor, multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
