// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    console.log(arr)
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<(arr.length-i-1); j++)
      {
        console.log("value of j", j, "value of j+1", j+1)
        if(arr[j]>arr[j+1]){
          const lesser = arr[j+1];
    console.log(lesser)
          arr[j+1]=arr[j];
          arr[j]=lesser;
  
  
        }
      }
  
    }
    return arr;
  }

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
