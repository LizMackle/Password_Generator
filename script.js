// characters able to be used within password string / declaring variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_";
const textareaPassword = document.getElementById("textarea-password");

// when user clicks button
function generatePassword() {
  // user prompted to choose desired password length (between 8 - 128)
  // password length is defined below
  var passwordLength = prompt("Enter desired length of password, between 8 - 128 characters");
  if (passwordLength < 8) {
    alert("Please choose again, password is too short!");
    generatePassword();
  }
  else if (passwordLength > 128) {
    alert("Please choose again, password is too long!");
    generatePassword();
  }

  // prompt user to include lowercase, uppercase, numbers, symbols
  let inputLowercase = window.confirm(
    "Would you like to use lowercase characters?"
  );

  let inputUppercase = window.confirm(
    "Would you like to use uppercase characters?"
  );

  let inputNumbers = window.confirm(
    "Would you like to use numbers?"
  );

  let inputSymbols = window.confirm(
    "Would you like to use symbols?"
  );

  // when criteria is selected
  let characterSet = "";

  if (inputLowercase) {
    characterSet = characterSet + lowercase;
  }

  if (inputUppercase) {
    characterSet = characterSet + uppercase;
  }

  if (inputNumbers) {
    characterSet = characterSet + numbers;
  }

  if (inputSymbols) {
    characterSet = characterSet + symbols;
  }
  
  // password is generated
  let password = "";
  for (let i = 0; 1 < passwordLength; i++) {
  //grabs random character from the chosen inputs
  const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length) ]

  // add to password
  password = password + randomCharacter;
  }

  // final password is returned and displayed in text area
  return password;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
