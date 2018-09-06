import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { CompanyStateService } from 'src/app/companies/+state/companies.state.service';
import { AddCompanyAction, EditCompanyAction, LoadCompanyForEdit } from '../../+state/companies.actions';
import { CompaniesState } from '../../+state/companies.reducer';
import { companiesQuery } from '../../+state/companies.selectors';
import { Company } from '../../../api.generated.service';
import { AuthenticationService } from '../../../shared/AuthenticationService.service';
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  form: FormGroup;
  editId: number;
  constructor(
    private companyDataService: CompanyStateService,
    private companyStore: Store<CompaniesState>,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });

    if (this.route.snapshot.params['id']) {
      this.editId = +this.route.snapshot.params['id'];
      this.companyStore.dispatch(new LoadCompanyForEdit(+this.route.snapshot.params['id']));
    }

    this.companyStore
      .select(companiesQuery.getEditCompany)
      .pipe(filter(x => x !== null))
      .subscribe(x => {
        console.log('editing company:', x);
        this.form.patchValue({
          name: x.name,
          address: x.address
        });
      });
  }
  onSubmit() {
    const model = <Company>{
      id: this.editId,
      name: this.form.get('name').value,
      address: this.form.get('address').value
    };

    if (this.editId) {
      // Editing an existing company
      this.companyStore.dispatch(new EditCompanyAction(model));
    } else {
      this.companyStore.dispatch(new AddCompanyAction(model));
    }
  }

  logout() {
    this.authService.logout();
  }
}
