import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResendEmailConfirmationPageComponent } from './pages/resend-email-confirmation-page/resend-email-confirmation-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'

  },
  {
    path: 'home',
    component: HomePageComponent   
  },
  {
    path: 'privacy',
    component: PrivacyPageComponent   
  },
  {
    path: 'login',
    component: LoginPageComponent   
  },
  {
    path: 'register',
    component: RegisterPageComponent   
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'accessDenied',
    component: AccessDeniedPageComponent
  },  
  {
    path: 'forgotPassword',
    component: ForgotPasswordPageComponent
  },
  {
    path: 'resendEmailConfirmation',
    component: ResendEmailConfirmationPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
