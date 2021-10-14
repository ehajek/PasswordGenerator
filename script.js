// Assignment code here
var pwrdFinal = ""
var pwrdLength
var pwrdSpecials = false;
var pwrdLowerCase = false;
var pwrdUpperCase = false;
var pwrdNumbers = false;
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
const specChar = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

//fuctions
const randNumber = Math.floor(Math.random() * 10);
const randLowChar = alphaLower[Math.floor(Math.random() * alphaLower.length)]
const randUppChar = alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
const randSpcChar = specChar[Math.floor(Math.random() * specChar.length)]

  // window.confirm("Are you sure you'd like to quit?"); 




//test
console.log(randNumber);
console.log(randLowChar);
console.log(randUppChar);
console.log(randSpcChar);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  pwrdLength = window.prompt("Enter the number of random password characters you would like (between 8 and 128 required).");
  if (pwrdLength < 8 || pwrdLength > 128 || isNaN(pwrdLength)) {
    alert("Must be numbrer between 8 and 128");
  } 
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
