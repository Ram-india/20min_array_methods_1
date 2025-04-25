
//========= SLICE ===========//

// Slice also used as a string methode, that differnce is that instead of slicing array indexes, you are slicing characters.

let slicestr = "now,this string to be slicing";

let slicestr1 = slicestr.slice(3,8);
//console.log(slicestr1);

//the slice method in javasscript is used to extract a section of an array or string and returns a new array or string without modifying original array.

//====== slice methode common use cases ======//

//1. copying arrays or strings

let originalArr = [1, 2, 3, 4, 5];

let copyingArr = originalArr.slice();

//2. extracting sub array or substring

let modifyingCopyingArr = copyingArr.slice(0,4);
modifyingCopyingArr.push(6,10,"Ram");

// console.log(modifyingCopyingArr);

// console.log(copyingArr);


//3. geting the first and last N elements
let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstElement = numberArr.slice(0,1);
let lastElement = numberArr.slice(-1);

// console.log(firstElement);
// console.log(lastElement);

//4.Remnoving elments at specific indices

let indexToRemove = 3;
let removeIndex = numberArr.slice(0, indexToRemove).concat(numberArr.slice(indexToRemove + 1));
//console.log(removeIndex);

//5.Processing subsets of data

let paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let subSet = paragraph.slice(0,10);
// console.log(subSet);

//substring() : this method same as the slice(), with only differnce being that it can't accept only negative values

let substring = paragraph.substring(0, 10);
// console.log(substring);

//substr(): extracts parts of a string beginning at the character of the specified position, and returns the specified number of characters.

// It has two parameters (start, length)
// 1. start - this is required. This is the starting position. Remember that the first character is 0.
// 2. length - optional. The number of characters to extract after the starting position. If empty,
// then it displays all of the characters after the starting position.

let strings = "Now it's my turn to try it out"
let stringAns = strings.substr(0,7);
console.log(stringAns);

//1. i need out only?
//  strings.substr(-3);
//2. print last single letter?
// string.sbstr(-1);
//3.So in the above string, start with the letter "m" of my and extract all characters up until the "r" in try.
//strings.substr(9,13);
// 4. Now start at 0 and extract all of the characters up until the "s" in the word, it's (this means stopping on, and including, the apostrophe).
