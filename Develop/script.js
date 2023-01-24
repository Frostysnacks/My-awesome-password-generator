// Assignment Code
var generateBtn = document.querySelector("#generate");
// User input var
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// numeric characters
var number = ["0","1","2","3","4","5","6","7","8","9"];
//special characters
var character = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
//lowercase characters
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//uppercase characters
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices

function generatePassword() {
// Prompts
  enter= parseInt(prompt("How many characters would you like your password to be? Enter between 8 and 128."));

  if (!enter){

    alert("This field needs a value.");
  
  } else if (enter < 8 || enter > 128) {
    
    enter = parseInt(prompt("Must be between 8 and 128 characters."));

  }
  
  else{
    confirmNumber = confirm("Include numbers?");
    
    confirmCharacter = confirm("Include special characters?");
    
    confirmUppercase = confirm("Include Uppercase letters?");
    
    confirmLowercase = confirm("Include Lowercase letters?");

  };
// if no options are selected
  if(!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase){

    choices = alert("Must include at least one criteria.");

  }
// if all options are selected
  else if (confirmCharacter && confirmLowercase && confirmNumber && confirmUppercase) {

    choices = character.concat(number, alphaUpper, alphaLower);
  }
// if 3 options are selected
  else if (confirmCharacter && confirmLowercase && confirmUppercase){

    choices = character.concat(alphaUpper, alphaLower);
  }

  else if (confirmCharacter && confirmLowercase && confirmNumber){

    choices = character.concat(number, alphaLower);
  }

  else if (confirmNumber && confirmLowercase && confirmUppercase) {

    choices = number.concat(alphaLower, alphaUpper);
  }

  else if(confirmCharacter && confirmUppercase && confirmNumber) {

    choices = character.concat(number, alphaUpper);
  }

  // If 2 options are selected
  else if (confirmCharacter && confirmNumber) {

    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {

    choices = character.concat(alphaLower);

  } 
  
  else if (confirmCharacter && confirmUppercase) {

    choices = character.concat(alphaUpper);
  }

  else if (confirmLowercase && confirmNumber) {

    choices = alphaLower.concat(number);

  } 
  
  else if (confirmLowercase && confirmUppercase) {

    choices = alphaLower.concat(alphaUpper);

  } 
  
  else if (confirmNumber && confirmUppercase) {

    choices = number.concat(alphaUpper);
  }

  // if 1 option is chosen
  else if (confirmLowercase) {
    
    choices = alphaLower;
  }

  else if (confirmCharacter) {

    choices = character;
  }

  else if (confirmUppercase) {

    choices = alphaUpper;
  }

  else if (confirmNumber) {

    choices = number;
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var options = choices[Math.floor(Math.random()*choices.length)];

    password.push(options);
  }
// Used .join to remove commas in the returned array
  return password.join('')

 
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
