// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//USING PROTOTYPE FUNCTIONS
function anagrams(stringA,stringB){
  const strA = cleanUp(stringA);
  const strB= cleanUp(stringB);
 if(strA=== strB){
   return true
 }
   else 
   {
     return false;
   }
 
 
 }
 
 
 //HELPER FUNCTION // 
 function cleanUp(str){
   return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
 }
 

// function anagrams(stringA, stringB) {
//     const strAmap=charMap(stringA);
//      const strBmap=charMap(stringB);
   
//    if(Object.keys(strAmap).length !== Object.keys(strAmap).length)
//    {
//    return false;
//    }
   
//    for(let char in strAmap){
//      if(strAmap[char] !== strBmap[char]){
//        return false;
//      }
//    }
//        return true;
   
//    }
   
//    function charMap(str){
//    const charMap={};
//    for(let char of str.replace(/[^\w]/g, "").toLowerCase())
//    {
//      if(!charMap[char]){
//            charMap[char]=1
//          }
//          else
//          charMap[char]++
//        }
//        return charMap;
//        }

module.exports = anagrams;
