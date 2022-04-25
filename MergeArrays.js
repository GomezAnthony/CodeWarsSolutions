function mergeArrays(arr1, arr2) {
    let arr3 = []
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    arr3 = arr1.concat(arr2)

    return arr3

   
    
  }
let arr1 = [1,3,5,7,9]
let arr2 = [10,8,6,4,2]
console.log(mergeArrays(arr1, arr2))