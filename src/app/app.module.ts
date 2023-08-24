import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { PortalUploadComponent } from './pages/portal-upload/portal-upload.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthNavComponent } from './shared/auth-nav/auth-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLayoutComponent } from './shared/layouts/user-layout/user-layout.component';
import { NavComponent } from './shared/nav/nav.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortalViewComponent,
    PortalUploadComponent,
    SignUpComponent,
    LoginComponent,
    AuthLayoutComponent,

    AuthNavComponent,
     UserLayoutComponent,
     NavComponent,
     BaseLayoutComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
