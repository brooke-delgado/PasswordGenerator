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
    "Please enter number of characters you want your new password to be. It must be between 8 and 128 characters"
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 and 128");
    console.log(passwordLength);

    if (passwordLength > 8 && passwordLength < 128)
      alert("Password can not have more than 128 characters");
  }

  for (var i = 0; i < passwordLength; i++) {
    console.log(i);
  }

  var upperCases = prompt("Would you like to use uppercases in your password?");
  if (upperCases === true) {
    console.log(upperCases);
  }

  var lowerCases = prompt("Would you like to use lowercases in your password?");
  if (lowerCases === true) {
    console.log(lowerCases);
  }

  var numbers = prompt("Would you like to use numbers in your password?");
  if (numbers === true) {
    console.log(numbers);
  }

  var characters = prompt("Would you like to use characters in your password?");
  if (characters === true) {
    console.log(characters);
  }
}

//Generate randomness

function getRandomlowerCase() {
  return lowerCase[Math.floor(math.random() * lowerCase.length)];
}

function getRandomupperCase() {
  return upperCases[math.floor(math.random() * upperCases.length)];
}

function getRandomnumbers() {
  return upperCases[math.floor(math.random() * numbers.length)];
}

function getcharacters() {
  return characters[math.floor(math.random() * characters.length)];
}

//Add event to generate button//
generateBtn.addEventListener("click", writePassword);
