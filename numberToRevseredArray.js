/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/
const digitize = (n) => {
   const numArray = Array.from(String(n), Number);
   const newArray = []
   for (let i = numArray.length; i >= 0; i-- ) {
      newArray.push(numArray[i])
   }
   return newArray
}

console.log(digitize(35231))