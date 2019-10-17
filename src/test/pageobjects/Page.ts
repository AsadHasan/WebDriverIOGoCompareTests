import { config } from "../../../wdio.conf";

export class Page {
  public open(): void {
    browser.url(config.baseUrl);
  }

  protected waitUntilCondition(
    condition: () => boolean,
    waitTime: number,
    timeOutErrorMessage: string,
  ): boolean {
    return browser.waitUntil(condition, waitTime, timeOutErrorMessage);
  }
}
