// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
// function vowels(newStr) {
//     let count = 0;
  
//     for(let char of newStr.toLowerCase())
//     {
//   if(char==='a' ||char==='e' ||char==='i' ||char==='o' ||char==='u')
//   {
//     console.log(char)
//     count +=1;
//   }
  
//     }
//     return count;
      
//   }

  function vowels(newStr) {
    let count = 0;
  
  checker = ['a','e','i','o','u']
  for(let char of newStr){
    if(checker.includes(char))
    count ++
  }
      return count;
  }
  
  

module.exports = vowels;``
