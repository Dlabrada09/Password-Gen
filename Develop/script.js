// Assignment code here
var nums = "0123456789";
var spec = "()!@#$%^&*_+=-{}][/?''";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  passwordLength = window.prompt("Passwords must be between 8 and 128 characters. Please choose a password length");
  // check if anything was entered 
  if (!passwordLength) {
   passwordLength = window.prompt("No valid input found try again");
  }
  //checks that the password is the correct length
  else if (passwordLength > 128 || passwordLength < 8) {
  window.prompt("Please ensure that your password length is a number between 8 and 128");
  } 
  //confirms what kind of characters the password must include
  else {
    confirmUpper = confirm ("Select Ok to include uppercase letters");
    confirmLower = confirm ("Select Ok to include lowercase letters");
    confirmNum = confirm ("Select Ok to include numbers");
    confirmSpec = confirm("Select Ok to include special characters");
  //checks to make sure at least one was selected
    if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpec) {
    window.alert("Please select Ok on at least one option");

    confirmUpper = confirm ("Select Ok to include uppercase letters");
    confirmLower = confirm ("Select Ok to include lowercase letters");
    confirmNum = confirm ("Select Ok to include lowercase letters");
    confirmSpec = confirm("Select Ok to include special characters");
    }
    
    else  {
      //creating the charset that will be used
      var chars = [];
      for (var i = 1; i <= 4; i++) {
        switch (i) {
          case 1: 
            if (confirmUpper) {
            chars.push(upper);
            }
            break;
          case 2: 
            if (confirmLower) {
              chars.push(lower);
            }
            break;
          case 3: 
            if (confirmNum) {
              chars.push(nums);
            }
            break;
          case 4: 
            if (confirmSpec) {
              chars.push(spec);
            }
            break;
          }
        }
      }
      //creation of random pass
      var charstring = chars.toString();
      var genPassword = 0;
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * charstring.length);
        genPassword += charstring.substring(randomNumber, randomNumber + 1);
       }
       return genPassword;
    }
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
