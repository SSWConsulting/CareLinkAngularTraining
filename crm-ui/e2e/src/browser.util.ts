import { $, $$, browser, by, element, Key, protractor } from 'protractor';

export class BrowserUtils {
  navigateTo(url: string) {
    return browser.get(url);
  }

  setMobileSize(width: number, height: number) {
    browser.driver
      .manage()
      .window()
      .setSize(width, height);
  }

  getText(selector: string) {
    return element(by.css(selector)).getText();
  }

  clickbutton(selector: string) {
    $(selector).click();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  enterText(selector: string, text: string) {
    const sb = $(selector);
    sb.click();
    sb.sendKeys(text);
  }
  enterDateValue(selector: string, day: string, mon: string, year: string) {
    const sb = $(selector);
    sb.click();
    sb.sendKeys(Key.ARROW_LEFT);
    sb.sendKeys(Key.ARROW_LEFT);
    sb.sendKeys(Key.ARROW_LEFT);
    sb.sendKeys(day);
    sb.sendKeys(mon);
    sb.sendKeys(year);
  }
  enterTextThenEnter(selector: string, text: string) {
    const sb = $$(selector).first();
    sb.click();
    sb.clear();
    sb.sendKeys(text);
    sb.sendKeys(protractor.Key.ENTER);
  }
  sleep(timeMiliSeconds: number) {
    return browser.sleep(timeMiliSeconds);
  }

  scrollToElement(e: any) {
    browser
      .actions()
      .mouseMove(e)
      .perform();
  }

  scrollToBotomOfPage() {
    // tslint:disable-next-line:quotemark
    browser.executeScript("$('.container-fluid').scrollTop(document.body.scrollHeight)");
  }

  countItems(selector: string) {
    return element.all(by.css(selector)).count();
  }

  getItembyIndex(selector: string, index: number) {
    return $(`${selector}:nth-child(${index})`);
  }

  isVisible(selector: string) {
    return $(selector).isDisplayed();
  }

  isPresent(selector: string) {
    return $(selector).isPresent();
  }

  clickNavbar(button: string) {
    $(`.nav-${button}`).click();
  }

  clickAlertbutton(button: string) {
    $(`.alert-${button}`).click();
  }
}
