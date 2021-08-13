// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCases = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["~!@#$%^&*()-_+="];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts that pop up after Generate Password button is clicked//
function generatePassword() {
  var passwordLength = prompt(
    "Please enter number of characters you want your new password to be. It must be between 8 and 128 characters in length"
  );
  console.log(passwordLength);
  if (passwordLength < 8) {
    alert("Please choose a password between 8 and 128");
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    console.log(i);
  }

  var upperCases = confirm(
    "Would you like to use uppercases in your password?"
  );

  if (upperCases === true) {
    console.log(upperCases);
  }

  var lowerCases = confirm(
    "Would you like to use lowercases in your password?"
  );

  if (lowerCases === true) {
    console.log(lowerCases);
  }

  var numbers = confirm("Would you like to use numbers in your password?");
  if (numbers === true) {
    console.log(numbers);
  }

  var characters = confirm(
    "Would you like to use characters in your password?"
  );
  if (characters === true) {
    console.log(characters);
  }
}

//Add event to generate button//
generateBtn.addEventListener("click", writePassword);
