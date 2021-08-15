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
var upperCase = [
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
var selections = [];

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
    "Please enter number of characters you want your new password to be. It must be between 8 and 128 characters"
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 and 128");
    generatePassword();
    return;
  }

  var choiceUpper = confirm(
    "Would you like to use uppercases in your password?"
  );

  var choiceLower = confirm(
    "Would you like to use lowercases in your password?"
  );

  var choiceNumber = confirm("Would you like to use numbers in your password?");

  var choiceSpecial = confirm(
    "Would you like to use special characters in your password?"
  );

  //create array of all possible characters, users choices
  //create empty array to store all possible character choices
  //concat all users choices
  var choices = [];

  //concat upper cases to empty choices
  if (choiceUpper) {
    choices = choices.concat(upperCase);
  }
  if (choiceLower) {
    choices = choices.concat(lowerCase);
  }
  if (choiceNumber) {
    choices = choices.concat(numbers);
  }
  if (choiceSpecial) {
    choices = choices.concat(characters);
  }

  if (choiceLower) var NewrandomPassword = [];
  if (choiceUpper) var NewrandomPassword = [];
  if (choiceNumber) var NewrandomPassword = [];
  if (choiceSpecial) var NewrandomPassword = [];

  for (var i = 0; i < passwordLength; i++) {
    var allSelections = choices[Math.floor(Math.random() * choices.length)];
    NewrandomPassword.push(allSelections);
  }
  return NewrandomPassword.join("");
}

generateBtn.addEventListener("click", writePassword);
