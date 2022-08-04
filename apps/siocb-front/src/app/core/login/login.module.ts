import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [SigninComponent, LoginComponent],
  imports: [CommonModule],
  exports: [SigninComponent, LoginComponent],
})
export class LoginModule {}
