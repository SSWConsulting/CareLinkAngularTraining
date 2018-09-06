import { Action } from '@ngrx/store';
import { Company } from '../../api.generated.service';

export enum CompaniesActionTypes {
  LoadCompanies = '[Companies] Load Companies',
  LoadCompaniesSuccess = '[Companies] Companies Loaded',
  LoadCompaniesFailure = '[Companies] Companies Load Error',

  LoadCompanyForEdit = '[Companies] Load Company For Edit',
  LoadCompanyForEditSuccess = '[Companies] Company For Edit Loaded',
  LoadCompanyForEditFailure = '[Companies] Company Edit Load Error',

  AddCompany = '[Companies] AddCompany',
  AddCompanySuccess = '[Companies] AddCompany Success',
  AddCompanyFailure = '[Companies] AddCompany Failure',

  EditCompany = '[Companies] EditCompany',
  EditCompanySuccess = '[Companies] EditCompany Success',
  EditCompanyFailure = '[Companies] EditCompany Failure'
}

export class LoadCompanies implements Action {
  readonly type = CompaniesActionTypes.LoadCompanies;
}

export class LoadCompaniesFailure implements Action {
  readonly type = CompaniesActionTypes.LoadCompaniesFailure;
  constructor(public payload: any) {}
}

export class LoadCompaniesSuccess implements Action {
  readonly type = CompaniesActionTypes.LoadCompaniesSuccess;
  constructor(public payload: Company[]) {}
}

export class LoadCompanyForEdit implements Action {
  readonly type = CompaniesActionTypes.LoadCompanyForEdit;
  constructor(public payload: number) {}
}

export class LoadCompanyForEditSuccess implements Action {
  readonly type = CompaniesActionTypes.LoadCompanyForEditSuccess;
  constructor(public payload: Company) {}
}

export class LoadCompanyForEditFailure implements Action {
  readonly type = CompaniesActionTypes.LoadCompanyForEditFailure;
  constructor(public payload: any) {}
}

// add company
export class AddCompanyAction implements Action {
  readonly type = CompaniesActionTypes.AddCompany;
  constructor(public payload: Company) {}
}

export class AddCompanyActionSuccess implements Action {
  readonly type = CompaniesActionTypes.AddCompanySuccess;
  constructor(public payload: Company) {}
}

export class AddCompanyActionFailure implements Action {
  readonly type = CompaniesActionTypes.AddCompanyFailure;
  constructor(public payload: any) {}
}


// edit company
export class EditCompanyAction implements Action {
  readonly type = CompaniesActionTypes.EditCompany;
  constructor(public payload: Company) {}
}

export class EditCompanyActionSuccess implements Action {
  readonly type = CompaniesActionTypes.EditCompanySuccess;
  constructor(public payload: Company) {}
}

export class EditCompanyActionFailure implements Action {
  readonly type = CompaniesActionTypes.EditCompanyFailure;
  constructor(public payload: any) {}
}
export type CompaniesAction =
  | LoadCompanies
  | LoadCompaniesSuccess
  | LoadCompaniesFailure
  | LoadCompanyForEdit
  | LoadCompanyForEditSuccess
  | LoadCompanyForEditFailure
  | AddCompanyAction
  | AddCompanyActionSuccess
  | AddCompanyActionFailure
  | EditCompanyAction
  | EditCompanyActionSuccess
  | EditCompanyActionFailure
  ;

export const fromCompaniesActions = {
  LoadCompanies,
  LoadCompaniesSuccess,
  LoadCompaniesFailure
};
