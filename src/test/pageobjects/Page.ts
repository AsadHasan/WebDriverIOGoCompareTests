import { config } from "../../../wdio.conf";
import { Element } from "@wdio/sync";

export class Page {
  public open(): void {
    browser.url(config.baseUrl);
  }

  protected waitUntilCondition(
    condition: () => boolean,
    timeOutErrorMessage: string
  ): boolean {
    return browser.waitUntil(
      condition,
      config.waitforTimeout,
      timeOutErrorMessage
    );
  }

  protected clickWhenReady(element: Element): void {
    this.waitUntilCondition(
      () => element.isDisplayed(),
      `Expected element to be displayed after ${config.waitforTimeout}ms`
    );
    element.scrollIntoView();
    element.click();
  }
}
