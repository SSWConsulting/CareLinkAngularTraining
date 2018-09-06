import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { companiesRoutes } from './companies.route';
import { CompanyEditComponent } from './container/company-edit/company-edit.component';
import { CompanyListComponent } from './container/company-list/company-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(companiesRoutes)],
  declarations: [CompanyListComponent, CompanyEditComponent]
})
export class CompaniesModule {}
