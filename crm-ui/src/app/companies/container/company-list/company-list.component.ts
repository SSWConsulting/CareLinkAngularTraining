import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadCompanies } from '../../+state/companies.actions';
import { CompaniesState } from '../../+state/companies.reducer';
import { companiesQuery } from '../../+state/companies.selectors';
import { Company } from '../../../api.generated.service';
import { AuthenticationService } from '../../../shared/AuthenticationService.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];
  constructor(private authService: AuthenticationService, private companyStore: Store<CompaniesState>) {}

  ngOnInit() {
    this.companyStore.select(companiesQuery.getCompanies).subscribe(x => {
      this.companies = x;
    });
    this.companyStore.dispatch(new LoadCompanies());
  }

  deleteCompany(comp: Company) {
    throw Error('Sorry, Delete company is not implemented yet');
  }
  logout() {
    this.authService.logout();
  }
}
