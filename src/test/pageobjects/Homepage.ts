import { Page } from "./Page";

export class Homepage extends Page {
  get ComparisonProducts(): WebdriverIO.Element[] {
    return $$(".g-prod-list>.is-draggable> * .flickity-slider>a");
  }
}
