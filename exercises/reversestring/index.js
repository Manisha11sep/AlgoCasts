//USING ARRAY.PROTOTYPE
// function reverse(str) {
//   return str.split("").reverse().join("");

// }


//Using for loop to reverse a string starting from the end of string and storing it inside a new String
// function reverse(str) {
//     var newStr = ""

//     for (let character of str){
//         newStr = character+newStr
//       }  
    
// for(let i = str.length-1; i>=0; i--){
//     newStr += str[i];
// }
//   return newStr;
//   }



  //USING REDUCE HIGH ORDER FUNCTION

  function reverse(str){
      return str.split('').reduce((newStr,char)=>char+newStr
      ,'')
  }
module.exports = reverse;
