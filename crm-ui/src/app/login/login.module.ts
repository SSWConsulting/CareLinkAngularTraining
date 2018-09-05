import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './container/login/login.component';
import { loginRoutes } from './login.route';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, RouterModule.forChild(loginRoutes)],
  declarations: [LoginComponent]
})
export class LoginModule {}
