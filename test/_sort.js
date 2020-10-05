const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should return an array even if it contains a single value", () => {
    let newBubbleArray = new Sort([1]);

    expect(newBubbleArray.sort()).to.eql([1]);
  });
  it("should return a properly sorted array", () => {
    let newBubbleArray1 = new Sort([5, 1, 2, 4, 8]);
    let newBubbleArray2 = new Sort([223, 456, 765, 123, 324]);
    let newBubbleArray3 = new Sort([13, 9, 45, 23, 67, 2]);
    let newBubbleArray4 = new Sort([7893, 3242, 5645, 1232, 4534]);
    let newBubbleArray5 = new Sort([1, 2, 3, 4, 5]);

    expect(newBubbleArray1.sort()).to.eql([1, 2, 4, 5, 8]);
    expect(newBubbleArray2.sort()).to.eql([123, 223, 324, 456, 765]);
    expect(newBubbleArray3.sort()).to.eql([2, 9, 13, 23, 45, 67]);
    expect(newBubbleArray4.sort()).to.eql([1232, 3242, 4534, 5645, 7893]);
    expect(newBubbleArray5.sort()).to.eql([1, 2, 3, 4, 5]);
  });
});
