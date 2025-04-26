// ==== Math.round() ==== //

let no = 192.88111;
let round = Math.round(no);
console.log(`no Type is ${typeof no},(Math.round) Result: ${round}`);

// ==== Math.ceil() ==== //

let no1 = 192.88111;
let ceil = Math.ceil(no1);
console.log(`no1 Type is ${typeof no1}, (Math.ceil) Result: ${ceil}`);

// ==== Math.floor() ==== //

let no2 = 192.88111;    
let floor = Math.floor(no2);
console.log(`no2 Type is ${typeof no2}, (Math.floor) Result: ${floor}`);

// ==== Math.trunc() ==== //

let no3 = 192.88111;    
let trunc = Math.trunc(no3);
console.log(`no3 Type is ${typeof no3}, (Math.trunc) Result: ${trunc}`);

// ==== Math.min() ==== //

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = Math.min(...array);
console.log(`array Type is ${typeof array}, (Math.min) Result: ${min}`);

// ==== Math.max() ==== //

let max = Math.max(...array);
console.log(`array Type is ${typeof array}, (Math.max) Result: ${max}`);

