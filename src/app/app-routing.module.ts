import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FogotPasswordComponent } from './auth/fogot-password/fogot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

const routes:Routes=[
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, data: { animation: 'LoginPage' } },
  { path: 'register-user', component: SignUpComponent, data: { animation: 'RegisterPage' }  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    //AuthGard
  },
  { path: 'forgot-password', component: FogotPasswordComponent, data: { animation: 'ForgotPasswordPage' }  },
  { path: 'verify-email-address', component: VerifyEmailComponent, data: { animation: 'VerifyEamilPage' } }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
