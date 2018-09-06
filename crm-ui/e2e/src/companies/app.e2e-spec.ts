import { BrowserUtils } from '../browser.util';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let util: BrowserUtils;

  beforeEach(() => {
    page = new AppPage();
    util = new BrowserUtils();
  });

  it('should display welcome message', () => {
    util.navigateTo('/login');
    expect(util.getText(page.WelcomeHeader)).toEqual('Login to CRM');
  });

  it('should redirect to Companies after login', () => {
    util.enterText(page.UserName, 'anthony');
    util.enterText(page.Password, 'mypassword');
    util.clickbutton(page.LoginButton);

    expect(util.getCurrentUrl()).toContain('/companies');
  });
});
