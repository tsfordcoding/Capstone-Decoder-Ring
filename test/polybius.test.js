const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  it("should translate the letter i to 42 when encoding", () => {
    const expected = "42";
    const actual = polybius("i");
    expect(actual).to.equal(expected);
  });

  it("should translate the letter j to 42 when encoding", () => {
    const expected = "42";
    const actual = polybius("j");
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to (i/j) when decoding", () => {
    const expected = "(i/j)";
    const actual = polybius("42", false);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = polybius("A message");
    const actual = polybius("a message");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after encoding", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A message");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after decoding", () => {
    const expected = "a message";
    const actual = polybius("11 23513434112251", false);
    expect(actual).to.equal(expected);
  });
});
