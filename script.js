// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  password = "";
  passwordCharacters = "";

  passwordlength = prompt("Password Must Be Between 8 and 128 Characters")
 
}

if(passwordlength>=8 || passwordlength<=128) {
 //if password does not satisfy the 8 charcter length then Alert- "Password length must be at least 8 characters." Return- back//

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts that pop up after Generate Password button is clicked//

function generatePassword() {
  var passwordlength = prompt ("Please enter number of characters you want your new password to be. It must be between 8 and 128 characters in length")
  var upperCases = confirm("Would you like to use uppercases in your password?");
  var lowerCases = confirm("Would you like to use lowercases in your password?");
  var numbers = confirm("would you like to use numers in your password?");
  var characters = confirm ("Would you like to use characters in your password?");
}
