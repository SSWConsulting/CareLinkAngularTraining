import { Component, OnInit } from '@angular/core';
import { CompanyStateService } from '../../+state/companies.state.service';
import { Company } from '../../../api.generated.service';
import { AuthenticationService } from '../../../shared/AuthenticationService.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];
  constructor(private companyState: CompanyStateService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.companyState.companies$.subscribe(x => {
      this.companies = x;
    });
    this.companyState.getCompanies();
  }

  deleteCompany(comp: Company) {
    throw Error('Sorry, Delete company is not implemented yet');
  }
  logout() {
    this.authService.logout();
  }
}
