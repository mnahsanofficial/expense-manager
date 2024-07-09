import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FogotPasswordComponent } from './auth/fogot-password/fogot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedPrimeNgModule } from 'src/shared/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    FogotPasswordComponent,
    VerifyEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
