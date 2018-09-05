import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company, CrmGeneratedApiClient } from '../../api.generated.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyStateService {
  private companiesSubject: BehaviorSubject<Company[]> = new BehaviorSubject(null);
  public readonly companies$: Observable<Company[]> = this.companiesSubject.asObservable();

  private editSubject: BehaviorSubject<Company> = new BehaviorSubject(null);
  public readonly editCompany$: Observable<Company> = this.editSubject.asObservable();

  constructor(private apiService: CrmGeneratedApiClient) {}

  getCompanies(): void {
    this.apiService.companies_GetAll().subscribe(x => {
      this.companiesSubject.next(x);
    });
  }

  updateCompany(id: number, model: Company): Observable<Company> {
    return this.apiService.companies_PutCompany(id, model);
  }

  addCompany(model: Company): Observable<Company> {
    return this.apiService.companies_Post(model);
  }

  getById(id: number): void {
    this.apiService.companies_Get(id).subscribe(x => {
      this.editSubject.next(x);
    });
  }
}
