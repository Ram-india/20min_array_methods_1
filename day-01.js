var today = "today was a very productive day.";

var arr = today.split(" ",2);

//console.log(arr);


// Use case 1 : parsing csv data

const csvData = "name,age,city\nJohn,30,New York\nJane,25,London\nMark,35,Paris";
const rows = csvData.split("\n");
const data = rows.map(row => row.split(","));
//console.log(data);

// Use case 2 : Extracting domain from an email address

const email = "john.doe@example.com";
const domain = email.split("@");
// console.log(domain.length); // Output: example.com
// console.log(`user name is : ${domain[0]}`); // Output: example.com
// console.log(`Domain name is: ${domain[1]}`); // Output: example.com
console.log(domain);

// Extracting date from string

let datearr = "1992-04-23";
let[year, month, date] = datearr.split("-");
let dob = datearr.split("-");

// iterating array by using for loop
for(let i = 0; i < dob.length; i++){
   // console.log(dob[i]);
}
// console.log(dob.length)

// console.log(dob[0]);
// console.log(dob[1]);
// console.log(dob[2]);

//  console.log(`year is: ${year}, Month is: ${month} and the date is ${date}`);

// creating url slug

let title = "This is a sample title";
const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);


//limiting number of splits

let text = "apple,jackfriut,pomogranet,pinapple";

let friuts = text.split(",", 2);
 console.log(friuts);

//=== Handling empty string ===//

const emptyString = "";
const emptyArray = emptyString.split(",");
//console.log(emptyArray);

const stringwithComma = ",,,,";
const arraywithComma = stringwithComma.split(",");
//console.log(arraywithComma);

// === spliting regular expression === //
const wordWithNo = "Ram123Kumar456is758Very91011Dedicative121314Person";
const wordWithNoArr = wordWithNo.split(/\d+/);
//console.log(wordWithNoArr); 


// === Reversing String === //
const reverseString = "Hello World";

const reverseArr = reverseString.split("").reverse().join("");
//console.log(reverseArr);

//=== challenge === result = ["go","go","go"]//


let challenge = "goshgoshgoshgoshgoshgoshgoshgoshgosh";

let challengeArr = challenge.split("sh",3);
// console.log(challengeArr);

