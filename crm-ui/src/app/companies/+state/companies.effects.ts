import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { CrmGeneratedApiClient } from '../../api.generated.service';
import { CompaniesActionTypes, LoadCompanies, LoadCompaniesFailure, LoadCompaniesSuccess, LoadCompanyForEdit, LoadCompanyForEditSuccess, LoadCompanyForEditFailure, AddCompanyAction, AddCompanyActionSuccess, AddCompanyActionFailure, EditCompanyAction, EditCompanyActionSuccess, EditCompanyActionFailure } from './companies.actions';
import { CompaniesState } from './companies.reducer';
import { Router } from '@angular/router';

@Injectable()
export class CompaniesEffects {
  @Effect()
  loadCompanies$ = this.dataPersistence.fetch(CompaniesActionTypes.LoadCompanies, {
    run: (action: LoadCompanies, state: CompaniesState) => {
      return this.apiService.companies_GetAll().pipe(
        map(d => {
          return new LoadCompaniesSuccess(d);
        })
      );
    },

    onError: (action: LoadCompanies, error) => {
      console.error('Error', error);
      return new LoadCompaniesFailure(error);
    }
  });

  @Effect()
  getCompanyForEdit$ = this.dataPersistence.fetch(CompaniesActionTypes.LoadCompanyForEdit, {
    run: (action: LoadCompanyForEdit, state: CompaniesState) => {
      return this.apiService.companies_Get(action.payload).pipe(
        map(d => {
          return new LoadCompanyForEditSuccess(d);
        })
      );
    },

    onError: (action: LoadCompanyForEdit, error) => {
      console.error('Error', error);
      return new LoadCompanyForEditFailure(error);
    }
  });

  @Effect()
  addCompany$ = this.dataPersistence.pessimisticUpdate(CompaniesActionTypes.AddCompany, {
    run: (action: AddCompanyAction, state: CompaniesState) => {
      return this.apiService.companies_Post(action.payload).pipe(
        map(d => {
          this.router.navigate(['/companies']);
          return new AddCompanyActionSuccess(d);
        })
      );
    },

    onError: (action: AddCompanyAction, error) => {
      console.error('Error', error);
      return new AddCompanyActionFailure(error);
    }
  });


  @Effect()
  editCompany$ = this.dataPersistence.pessimisticUpdate(CompaniesActionTypes.EditCompany, {
    run: (action: EditCompanyAction, state: CompaniesState) => {
      return this.apiService.companies_PutCompany(action.payload.id, action.payload).pipe(
        map(d => {
          this.router.navigate(['/companies']);
          return new EditCompanyActionSuccess(d);
        })
      );
    },

    onError: (action: EditCompanyAction, error) => {
      console.error('Error', error);
      return new EditCompanyActionFailure(error);
    }
  });

  constructor(
    private router: Router,
    private actions$: Actions,
    private apiService: CrmGeneratedApiClient,
    private dataPersistence: DataPersistence<CompaniesState>
  ) {}
}
