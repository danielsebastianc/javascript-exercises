const palindromes = function (string) {
  const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanum.includes(char))
    .join("");
  const reverseString = cleanString.split("").reverse().join("");
  return reverseString == cleanString;
};

// Do not edit below this line
module.exports = palindromes;
