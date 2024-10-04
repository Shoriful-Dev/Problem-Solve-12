/* Write a Javascript function to count the occurrences of each elements in an 
Array and store the counts in an Object. The keys of the 
object should represent the elements of the Array, and the value 
should represent the number of times each element appears in the 
Array. */

const numbers = [1, 2, 2, 3, 1, 4, 2,3,9,7,5,4,5,5,2];
let counts = {};

for (let element of numbers) {
  counts[element] = (counts[element] || 0) + 1;
}
console.log(counts);

// Output:
// { '1': 2, '2': 4, '3': 2, '4': 2, '5': 3, '7': 1, '9': 1 }
