// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase=['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i']
var upperCase =['A', 'B']
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters =[]
var emptyArray= []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword (){

var passwordLength = prompt("password must be between 8 and 128 characters")

if (passwordLength < 8){
    alert('Pleae make sure your character is 8 or more characters long')

    return null 

}
if (passwordLength >128 ){
  alert ('Please make sure your character is less than 128 characters')

  return null
}


var containsUpper = confirm("Would you like uppercase characters in your password")
var containslower = confirm("Would you like lower characters in your password")
var containsNumeric = confirm("Would you like numeric characters in your password")
var containssSpecial = confirm("Would you like special characters in your password")
console.log(containsUpper, containslower , containsNumeric, containssSpecial)

if (containsUpper === false && containslower === false && containsNumeric === false && containssSpecial ===false){

  alert('Please make sure to pick one character set ')
}
var combineArray = []
if (containsUpper === true){
  combineArray = emptyArray.concat (upperCase)

}

if (containsLower === true){
  combineArray = emptyArray.concat (lowerCase)
}

if (containsNumeric === true){
  combineArray = emptyArray.concat (numbers)
}


if (containssSpecial=== true){
  combineArray = emptyArray.concat (specialCharacters)
}




for (var i=0;i<passwordLength; i++){

  //how can i get a random index from an array
  //how can i add a random value to an empty array
  //how can i convert an array to a string
  //how can i return a string at the end of my array


}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

