import { config } from "../../../wdio.conf";

export class Page {
  public open(): void {
    browser.url(config.baseUrl);
  }
}
