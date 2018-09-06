import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { companiesRoutes } from './companies.route';
import { CompanyEditComponent } from './container/company-edit/company-edit.component';
import { CompanyListComponent } from './container/company-list/company-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as companiesInitialState, companiesReducer } from './+state/companies.reducer';
import { CompaniesEffects } from './+state/companies.effects';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(companiesRoutes), StoreModule.forFeature('companies', companiesReducer, { initialState: companiesInitialState }), EffectsModule.forFeature([CompaniesEffects])],
  declarations: [CompanyListComponent, CompanyEditComponent]
})
export class CompaniesModule {}
