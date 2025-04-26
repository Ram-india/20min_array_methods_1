// =========== toString() and String() ============ (Numbers to Strings)  //

// These will be used a lot and should be pretty clear.
// toString() AND String() both convert a number to a string.

// ===== toString() ======//

let noToString = 1234;
// console.log(typeof noToString);//number
let newString = noToString.toString();
// console.log(typeof newString, newString);// string

//===== String() ======//

let noToString1 = String(noToString);
// console.log(typeof noToString1, noToString1);

// // ========== toFixed() ===========

// toFixed() does the same as toString() but it returns the string with a set number of decimals that you would pass in as an argument.
// The most widely used is the money format which is two decimal places.

let money = 3.58;
let moneyFormate = money.toFixed(0)
 //console.log(typeof moneyFormate, moneyFormate);

let recivedAmount = 300;
let recivedAmountFormate = recivedAmount.toFixed(2)
// console.log(typeof recivedAmountFormate, recivedAmountFormate);


// ======== Strings to Numbers ===========//

// Number()

let str = "10.99";

let no = Number(str);
//console.log(typeof no, no);


// =======ParseInt() and ParseFloat() =========//

// parseInt() and parseFloat() are used to convert strings to numbers .

//parseInt() converts a string to an integer. If the string contains a decimal, it will be truncated.


let no1 = parseInt(no);
console.log(`no01 Type is: ${typeof no1},(parseInt) Result: ${no1}`);


//parseFloat() converts a string to a floating point number. If the string contains a decimal, it will be preserved.

let no2 = parseFloat(no);
console.log(`no2 Type is ${typeof no2},(parseFloat) Result: ${no2}`);

// ===== Number to string =======

// toString(); - converts a number to a string
// String(); - converts a number to a string
// toFixed(); - converts a number to a string with a parameter to set number of decimal places


// =======String to number ========

// Number(); - converts a string to a number
// parseInt(); - parses a string and returns a number that is rounded down.
// parseFloat(); - parses a string and returns a number that keeps its decimal places (if it has them).

