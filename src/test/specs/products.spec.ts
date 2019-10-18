import { expect } from "chai";
import { Homepage } from "../pageobjects/Homepage";

describe("GoCompare homepage", () => {
  it("should contain draggable slider with comparison products", () => {
    const homepage = new Homepage();
    homepage.open();
    var homepageHhasDraggableSliderWithComparisonProducts =
      homepage.hasDraggableSliderWithComparisonProducts;
    expect(homepageHhasDraggableSliderWithComparisonProducts).to.be.true;
  });
});
