import { Page } from "./Page";
import { config } from "wdio.conf";
import { Element } from "@wdio/sync";

export class Homepage extends Page {
  get hasDraggableSliderWithComparisonProducts(): boolean {
    var slidableComparisonProducts: Element[] = $$(
      ".g-prod-list>.is-draggable> * .flickity-slider>a"
    );
    var draggerButtons: Element[] = $$(
      ".g-prod-list > * .flickity-page-dots>li"
    );

    return this.waitUntilCondition(
      () =>
        slidableComparisonProducts.every(product =>
          draggerButtons.some(button => {
            this.clickWhenReady(button);
            return product.isDisplayed();
          })
        ),
      `Expected Draggable slider with each comparison product displayed on Homepage after waiting for ${config.waitforTimeout}ms`
    );
  }
}
