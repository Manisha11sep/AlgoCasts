// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");

// }


//Using for loop to reverse a string starting from the end of string and storing it inside a new String
function reverse(str) {
    var newStr = ""

    
for(let i = str.length-1; i>=0; i--){
    newStr += str[i];
}
  return newStr;
  }

module.exports = reverse;
