import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from '../../api.generated.service';
import { CompaniesState } from './companies.reducer';

// Lookup the 'Companies' feature state managed by NgRx
const getCompaniesState = createFeatureSelector<CompaniesState>('companies');

const getCompanies = createSelector(getCompaniesState, (state: CompaniesState) => state.companies);
const getLoadingCompanies = createSelector(getCompaniesState, (state: CompaniesState) => state.loadingCompanies);

const getEditCompany = createSelector(getCompaniesState, (state: CompaniesState) => state.editingCompany);
const getLoadingEditCompany = createSelector(getCompaniesState, (state: CompaniesState) => state.loadingCompanyForEdit);

const getNumberOfCompanies = createSelector(getCompanies, (allCompanies: Company[]) => {
  if (allCompanies) {
    return allCompanies.length;
  }
  return 0;
});

export const companiesQuery = {
  getCompanies,
  getLoadingCompanies,
  getEditCompany,
  getLoadingEditCompany,
  getNumberOfCompanies
};
