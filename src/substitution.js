// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const sortedAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCaseInput = input.toLowerCase();
    // Create empty string
    let newString = "";
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;

    // Checks for unique characters in alphabet
    const uniqueCharacters = {};

    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      if (uniqueCharacters[char]) {
        return false;
      }
      uniqueCharacters[char] = true;
    }

    if (encode) {
      // Encode
      // Loop through string
      for (let i = 0; i < lowerCaseInput.length; i++) {
        // Defiine variable to hold current character
        const currentChar = lowerCaseInput[i];
        // Check if index is a letter
        if (alphabet.indexOf(currentChar) < 0) {
          // Add current character to new string
          newString += currentChar;
          continue;
        }
        // Define variable to hold current index of current character in alphabet array
        const currentIndex = sortedAlphabet.indexOf(currentChar);
        // Complete newString with letter at current index located in the key
        newString += alphabet[currentIndex];
      }
    } else {
      // Decode
      // Loop through string
      for (let i = 0; i < lowerCaseInput.length; i++) {
        // Defiine variable to hold current character
        const currentChar = lowerCaseInput[i];
        // Check if index is a letter
        if (alphabet.indexOf(currentChar) < 0) {
          // Add current character to new string
          newString += currentChar;
          continue;
        }
        // Define variable to hold current index of current character in alphabet array
        const currentIndex = alphabet.indexOf(currentChar);
        // Complete newString with letter at current index located in the key
        newString += sortedAlphabet[currentIndex];
      }
    }
    return newString;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
