// ======= char at() ======
// The charAt() method returns the character at a specified index of a string.
// It has one parameter, (index)
// So our parameter is an index position, and it returns the letter in that position. Just remember this:
// What position is such-and-such character at (char at)?

let position = "I want to search for positions within this string.";
// console.log(position.charAt(0));

// ======== indexOf() =========
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// It has two parameters (value, start)
// 1. value - this is required. This is the value that we are looking for.
// 2. start - optional. This is the position where we want to start our search. If empty, it starts at the first character.



let sleep = "I am going to go to sleep after this.";
console.log(sleep.indexOf("g", 2));

// ============= lastIndexOf() =================

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.


console.log(sleep.lastIndexOf("g"));