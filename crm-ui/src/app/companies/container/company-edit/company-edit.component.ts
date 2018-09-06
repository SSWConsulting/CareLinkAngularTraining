import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CompanyStateService } from 'src/app/companies/+state/companies.state.service';
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
  constructor(private stateService: CompanyStateService, private route: ActivatedRoute, private router: Router,
  private authService: AuthenticationService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });

    if (this.route.snapshot.params['id']) {
      this.editId = +this.route.snapshot.params['id'];
      this.stateService.getById(+this.route.snapshot.params['id']);
    }

    this.stateService.editCompany$.pipe(filter(x => x !== null)).subscribe(x => {
      console.log('editing company:', x);
      this.form.patchValue({
        name: x.name,
        address: x.address
      });
    });
  }
  onSubmit() {
    const model = <Company>{
      name: this.form.get('name').value,
      address: this.form.get('address').value
    };

    if (this.editId) {
      // Editing an existing company
      this.stateService.updateCompany(this.editId, model).subscribe(x => {
        this.router.navigate(['/companies']);
      });
    } else {
      this.stateService.addCompany(model).subscribe(x => {
        this.router.navigate(['/companies']);
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
