import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/AuthenticationService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMsg: string;
  constructor(private autService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.autService.authenticateUser(this.form.get('username').value, this.form.get('password').value)
    .subscribe(
      success => {
        if (success) {
          this.router.navigate(['/companies']);
        } else {
          this.errorMsg = 'login failed';
        }
      },
      error => {
        this.errorMsg = 'unknown error';
      }
    );
  }
}
