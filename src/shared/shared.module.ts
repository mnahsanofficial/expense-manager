import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { SharedPrimeNgModule } from './primeng.module';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimeNgModule
  ],
  declarations: [],
  exports:[SharedPrimeNgModule]
})
export class SharedModule { }
