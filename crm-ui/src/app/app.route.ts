import { Route } from '@angular/router';
import { AuthGuardService } from './shared/AuthGuard.service';
import { PageNotFoundComponent } from './shared/container/page-not-found/page-not-found.component';
export const route: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'companies',
    loadChildren: './companies/companies.module#CompaniesModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
