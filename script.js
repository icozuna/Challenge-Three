// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "How long do you want your password to be? Must be between 8 and 128 characters."
  );
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    window.alert("Password must be at least 8 characters long.");
    return "";
  }
  if (passwordLength > 128) {
    window.alert("Password must be less than 128 characters long.");
    return "";
  }

  var lowerCase = window.prompt(
    "Do you want to include lowercase characters in your password?"
  );
  if (lowerCase) {
    window.alert(
      "You have decided to add lower case characters to your password."
    );
  }
  if (lowerCase) {
    password += lowerCaseCharacters;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
