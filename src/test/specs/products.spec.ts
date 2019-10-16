import { expect } from "chai";
import { Homepage } from "../pageobjects/Homepage";

describe("GoCompare homepage", () => {
  it("should contain draggable slider with comparison products", () => {
    const homepage = new Homepage();
    homepage.open();
    expect(homepage.ComparisonProducts).to.not.be.empty;
  });
});
