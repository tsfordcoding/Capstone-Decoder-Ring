// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check if shift value is invalid and return false if it is
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined)
      return false;

    // Lower case the input string
    const lowerCaseInput = input.toLowerCase();

    // Define alphabet for the cipher and split alphabet into array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // Define newString for encoded string
    let newString = "";

    // Loop through input
    for (let i = 0; i < lowerCaseInput.length; i++) {
      // Defiine variable to hold current character
      let currentChar = lowerCaseInput[i];
      // Check if index is a letter
      if (alphabet.indexOf(currentChar) < 0) {
        // Add current character to new string
        newString += currentChar;
        continue;
      }

      if (!encode) {
        // Define variable to hold current index of current character in alphabet array
        let currentIndex = alphabet.indexOf(currentChar);
        // Define newIndex to shift currentIndex
        let newIndex = currentIndex - shift;
        // Wraps around if newIndex exceeds index in alphabet array
        if (newIndex > 25) newIndex -= 26;
        // Allows negative shift
        if (newIndex < 0) newIndex += 26;
        // Complete newString with letter at newIndex
        newString += alphabet[newIndex];
      } else {
        // Define variable to hold current index of current character in alphabet array
        let currentIndex = alphabet.indexOf(currentChar);
        // Define newIndex to shift currentIndex
        let newIndex = currentIndex + shift;
        // Wraps around if newIndex exceeds index in alphabet array
        if (newIndex > 25) newIndex -= 26;
        // Allows negative shift
        if (newIndex < 0) newIndex += 26;
        // Complete newString with letter at newIndex
        newString += alphabet[newIndex];
      }
    }
    // Return the new encoded string
    return newString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };