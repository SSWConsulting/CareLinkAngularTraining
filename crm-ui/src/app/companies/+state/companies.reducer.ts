import { Company } from '../../api.generated.service';
import { CompaniesAction, CompaniesActionTypes } from './companies.actions';

/**
 * Interface for the 'Companies' data used in
 *  - CompaniesState, and
 *  - companiesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CompaniesState {
  companies: Company[];
  editingCompany: Company;
  loadingCompanies: boolean;
  loadingCompanyForEdit: boolean;
}

export const initialState: CompaniesState = {
  companies: null,
  editingCompany: null,
  loadingCompanies: false,
  loadingCompanyForEdit: false
};

export function companiesReducer(state: CompaniesState = initialState, action: CompaniesAction): CompaniesState {
  switch (action.type) {
    case CompaniesActionTypes.LoadCompanies: {
      state = {
        ...state,
        loadingCompanies: true
      };
      break;
    }

    case CompaniesActionTypes.LoadCompaniesSuccess: {
      state = {
        ...state,
        companies: action.payload,
        loadingCompanies: false
      };
      break;
    }
    case CompaniesActionTypes.LoadCompaniesFailure: {
      state = {
        ...state,
        companies: null,
        loadingCompanies: false
      };
      break;
    }

    case CompaniesActionTypes.LoadCompanyForEdit: {
      state = {
        ...state,
        loadingCompanyForEdit: true
      };
      break;
    }

    case CompaniesActionTypes.LoadCompanyForEditSuccess: {
      state = {
        ...state,
        editingCompany: action.payload,
        loadingCompanyForEdit: false
      };
      break;
    }
    case CompaniesActionTypes.LoadCompanyForEditFailure: {
      state = {
        ...state,
        loadingCompanyForEdit: false
      };
      break;
    }
  }
  return state;
}
