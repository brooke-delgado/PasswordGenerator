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

if(passwordlength<=8 || passwordlength<=128) {
 //if password does not satisfy the 8 charcter length then Alert- "Password length must be at least 8 characters." Return- back//

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
