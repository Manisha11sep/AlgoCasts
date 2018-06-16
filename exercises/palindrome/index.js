// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//REVERSING A STRING AND THEN COMPARING IT WITH ORIGINAL STRING

// function palindrome(str) {
//     let newStr = "";
//     for(var i = str.length-1;i>=0; i--){
//         newStr+=str[i]
//     }
// if(str===newStr)
// return true;
// else 
// return false;
// }


//USING ARRAY.PROTOTYPE
// function palindrome(str){
//    const reverse = str.split('').reverse().join('')
//    return str === reverse;
// }


// RUNNING THE LOOP FOR STR.LENGTH/2 
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }


module.exports = palindrome;
