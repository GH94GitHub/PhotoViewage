import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { PortalUploadComponent } from './pages/portal-upload/portal-upload.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthLandingComponent } from './shared/auth-landing/auth-landing.component';
import { AuthNavComponent } from './shared/auth-nav/auth-nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortalViewComponent,
    PortalUploadComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    AuthLayoutComponent,
    AuthLandingComponent,
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
