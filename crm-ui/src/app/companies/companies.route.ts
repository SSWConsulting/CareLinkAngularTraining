import { Route } from '@angular/router';
import { CompanyEditComponent } from './container/company-edit/company-edit.component';
import { CompanyListComponent } from './container/company-list/company-list.component';
export const companiesRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CompanyListComponent
  },
  {
    path: 'edit/:id',
    component: CompanyEditComponent
  },
  {
    path: 'add',
    component: CompanyEditComponent
  }
];
