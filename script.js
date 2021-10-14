// Assignment code here
var pwrdFinal = []
var pwrdLength
var pwrdSpecials
var pwrdLowerCase
var pwrdUpperCase
var pwrdNumbers
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
const specChar = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

//fuctions
function randNumber() { a = Math.floor(Math.random() * 10); return a; };
function randLowChar() { a = alphaLower[Math.floor(Math.random() * alphaLower.length)]; return a; };
function randUppChar() { a = alphaUpper[Math.floor(Math.random() * alphaUpper.length)]; return a; };
function randSpcChar() { a = specChar[Math.floor(Math.random() * specChar.length)]; return a; };

//test
// console.log(pwrdFinal);
// console.log(randNumber());
// console.log(randLowChar());
// console.log(randUppChar());
// console.log(randSpcChar());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var pwrdFinal = [];
  pwrdLength = window.prompt("Enter the number of random password characters you would like (between 8 and 128 required).");
  if (pwrdLength < 8 || pwrdLength > 128 || isNaN(pwrdLength)) {
    window.alert("Must be numbrer between 8 and 128");
    process.exit();
  }
  pwrdSpecials = window.confirm("Would you like to use Speical Characters?")
  pwrdLowerCase = window.confirm("Would you like to use Lower Case Letters?")
  pwrdUpperCase = window.confirm("Would you like to use Upper Case Letters?")
  pwrdNumbers = window.confirm("Would you like to use Numbers?")

  var pwrdOptions = []

  if (!pwrdSpecials) { } else pwrdOptions.push("pwrdSpecials");
  if (!pwrdLowerCase) { } else pwrdOptions.push("pwrdLowerCase");
  if (!pwrdUpperCase) { } else pwrdOptions.push("pwrdUpperCase");
  if (!pwrdNumbers) { } else pwrdOptions.push("pwrdNumbers");

  // console.log(pwrdOptions);

 function magicNum() {a = Math.floor(Math.random() * pwrdOptions.length); return a;};
  //validate at least one choice 
  if (pwrdOptions.length === 0) {
    window.alert("Please start over, you must pick at least one Character Type");
    process.exit();
  } else {
    for (let step = 0; step < pwrdLength; step++) {
      var randOption = magicNum();
      // console.log(pwrdOptions[randOption]);
      if (pwrdOptions[randOption] === 'pwrdSpecials') {
        let char = randSpcChar();
        // console.log(char);
        pwrdFinal.push(char);
        // console.log(pwrdFinal);
      } else if (pwrdOptions[randOption] === 'pwrdLowerCase') {
        let char = randLowChar();
        // console.log(char);
        pwrdFinal.push(char);
        // console.log(pwrdFinal);
      } else if (pwrdOptions[randOption] === 'pwrdUpperCase') {
        let char = randUppChar();
        // console.log(char);
        pwrdFinal.push(char);
        // console.log(pwrdFinal);
      } else if (pwrdOptions[randOption] === 'pwrdNumbers') {
        let char = randNumber();
        // console.log(char);
        pwrdFinal.push(char);
        // console.log(pwrdFinal);
      }
    }
  }
  console.log(pwrdFinal);
  var pwrdFinalString = pwrdFinal.join("");
  console.log(pwrdFinalString);

  writePassword(pwrdFinalString);

});


// Write password to the #password input
function writePassword(password) {
  
  const resultEl = document.getElementById("password");
  resultEl.textContent = password;
  
}


