import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
];
@NgModule({
  declarations: [CreateAccountComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
