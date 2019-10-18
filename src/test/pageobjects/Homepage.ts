import { Page } from "./Page";
import { config } from "wdio.conf";
import { Element } from "@wdio/sync";

export class Homepage extends Page {
  get hasDraggableSliderWithComparisonProducts(): boolean {
    return this.waitUntilCondition(() => {
      const slidableComparisonProducts: Element[] = $$(
        ".g-prod-list>.is-draggable> * .flickity-slider>a"
      );
      const draggerButtons: Element[] = $$(
        ".g-prod-list > * .flickity-page-dots>li"
      );
      return slidableComparisonProducts.every(product =>
        draggerButtons.some(button => {
          this.clickWhenReady(button);
          return product.isDisplayed();
        })
      );
    }, `Expected Draggable slider with each comparison product displayed on Homepage after waiting for ${config.waitforTimeout}ms`);
  }
}
