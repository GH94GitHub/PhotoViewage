import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { AuthCanActivateGuardGuard } from './_guards/auth-can-activate-guard.guard';
import { PortalUploadComponent } from './pages/portal-upload/portal-upload.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthNavComponent } from './shared/auth-nav/auth-nav.component';
import { UserLayoutComponent } from './shared/layouts/user-layout/user-layout.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';

// www.photoviewage.com?
const routes: Routes = [
  { path: "", redirectTo: "view", pathMatch: "full" },

  { path: "", component: BaseLayoutComponent, children: [
    { path: "home", component: HomeComponent },
    { path: "", component: UserLayoutComponent, canActivate: [ AuthCanActivateGuardGuard ], children: [
      { path: "view", component: PortalViewComponent },
      { path: "upload", component: PortalUploadComponent },
    ]},
  ]},

  { path: "auth", component: AuthLayoutComponent, children: [
      { path: "", component: AuthNavComponent },
      { path: "signup", component: SignUpComponent },
      { path: "login", component: LoginComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
