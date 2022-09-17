import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginTwoFactorComponent } from './components/login-two-factor/login-two-factor.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ResendEmailConfirmationPageComponent } from './pages/resend-email-confirmation-page/resend-email-confirmation-page.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { ExternalLoginComponent } from './components/external-login/external-login.component';
import { ResendEmailConfirmationComponent } from './components/resend-email-confirmation/resend-email-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    NotFoundPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivacyPageComponent,
    HomePageComponent,
    AccessDeniedPageComponent,
    ProfilePageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginTwoFactorComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,    
    PageTitleComponent, ForgotPasswordPageComponent, ResendEmailConfirmationPageComponent, ValidationMessagesComponent, ExternalLoginComponent, ResendEmailConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
