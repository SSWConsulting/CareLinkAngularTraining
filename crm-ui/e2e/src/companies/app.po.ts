import { browser, by, element, $ } from 'protractor';

export class AppPage {
  WelcomeHeader = '*[data-test-id="HEADER"]';
  LoginButton = '*[data-test-id="LOGIN-BUTTON"]';
  UserName = '*[formControlName=username]';
  Password = '*[formControlName=password]';
}
