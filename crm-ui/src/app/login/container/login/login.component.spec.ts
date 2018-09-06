/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../../shared/AuthenticationService.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let submitEl: DebugElement;
  let userNameEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [LoginComponent],
      providers: [AuthenticationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('*[data-test-id="LOGIN-BUTTON"]'));
    userNameEl = fixture.debugElement.query(By.css('*[formControlName="username"]'));
    passwordEl = fixture.debugElement.query(By.css('*[formControlName="password"]'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the login button disabled', () => {
    expect(userNameEl.nativeElement.value).toEqual('');
    expect(passwordEl.nativeElement.value).toEqual('');
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });
});
