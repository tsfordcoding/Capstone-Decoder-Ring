const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
  it("caesar() should be a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("should return false if shift is 0", () => {
    const expected = false;
    const actual = caesar("This is a word", 0);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is >25", () => {
    const expected = false;
    const actual = caesar("This is a word", 26);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is <-25", () => {
    const expected = false;
    const actual = caesar("This is a word", -26);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is not present", () => {
    const expected = false;
    const actual = caesar("This is a word");
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = caesar("A message", 3);
    const actual = caesar("a message", 3);
    expect(actual).to.equal(expected);
  });

  it("should wrap around to front of alphabet", () => {
    const expected = "cheud pdjdclqh";
    const actual = caesar("Zebra Magazine", 3);
    expect(actual).to.equal(expected);
  });

  it("maintain spaces and other nonalphabetic symbols in the message before and after encoding", () => {
    const expected = "d phvvdjh.";
    const actual = caesar("A message.", 3);
    expect(actual).to.equal(expected);
  });

  it("maintain spaces and other nonalphabetic symbols in the message before and after decoding", () => {
    const expected = "a message.";
    const actual = caesar("d phvvdjh.", 3, false);
    expect(actual).to.equal(expected);
  });
});
