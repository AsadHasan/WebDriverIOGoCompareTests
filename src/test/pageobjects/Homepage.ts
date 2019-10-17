import { Page } from "./Page";

export class Homepage extends Page {
  get hasDraggableSliderWithComparisonProducts(): boolean {
    return this.waitUntilCondition(
      () =>
        $$(".g-prod-list>.is-draggable> * .flickity-slider>a").every((element) =>
          element.isDisplayed(),
        ),
      5000,
      "Expected Draggable slider with comparison products displayed on Homepage after waiting for 5 seconds",
    );
  }
}
