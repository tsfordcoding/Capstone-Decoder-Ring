const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  it("should return false if alphabet is not 26 characters long", () => {
    const expected = false;
    const actual = substitution("message", "plmoknijbuhvygtfxrdzeswaq");
    expect(actual).to.equal(expected);
  });

  it("should correctly translate the given phrase", () => {
    const expected = "ykrrpik";
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    expect(actual).to.equal(expected);
  });

  it("should return false if any duplicates in alphabet", () => {
    const expected = false;
    const actual = substitution("message", "plmoknijbuhvpgctfxrdzeswaq");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after encoding", () => {
    const expected = "p ykrrpik";
    const actual = substitution("a message", "plmoknijbuhvygctfxrdzeswaq");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after decoding", () => {
    const expected = "a message";
    const actual = substitution(
      "p ykrrpik",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "p ykrrpik";
    const actual = substitution("A Message", "plmoknijbuhvygctfxrdzeswaq");
    expect(actual).to.equal(expected);
  });
});
