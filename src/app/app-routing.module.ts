import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { AuthCanActivateGuardGuard } from './_guards/auth-can-activate-guard.guard';
import { PortalUploadComponent } from './pages/portal-upload/portal-upload.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthLandingComponent } from './shared/auth-landing/auth-landing.component';
import { AuthNavComponent } from './shared/auth-nav/auth-nav.component';

// www.photoviewage.com
const routes: Routes = [
  { path: "", redirectTo: "view", pathMatch: "full" },
  { path: "view", component: PortalViewComponent, canActivate: [ AuthCanActivateGuardGuard ] },
  { path: "upload", component: PortalUploadComponent, canActivate: [ AuthCanActivateGuardGuard ] },
  { path: "auth", component: AuthLayoutComponent, children: [
    { path: "", component: AuthLandingComponent, children: [
      { path: "", component: AuthNavComponent },
      { path: "signup", component: SignUpComponent},
      { path: "login", component: LoginComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
