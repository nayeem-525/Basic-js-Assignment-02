// ** Number - 01 :
function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(50, 20)); // Output: 70


// ** Number - 02 :
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10)); // Output: true
console.log(isEven(15)); // Output: false


// ** Number - 03 :
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 20, 12, 25, 10])); // Output: 25


// ** Number - 04 :
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]


// ** Number - 05 :
function countWords(str) {
    return str.split(" ").filter(word => word !== "").length;
}

console.log(countWords("Hello, I am Nayeem Ahmed")); // Output: 5


// ** Number - 06 :
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])); // Output: [1, 2, 3, 4, 5, 6, 7];
