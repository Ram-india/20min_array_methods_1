// **** ===== MAP method ===== **** //

// The map() method creates a new array with the results of calling a function for every array element.

let numbers = ["0", "1", "2", "3", "4", "5"];
function mulby2 (element){ 
    return element * 200;
};

ans = numbers.map(mulby2);
// console.log(ans);
// console.log(numbers);

function sqtroot(element){
    return Math.sqrt(element);
}

anssqt = numbers.map(sqtroot);
// console.log(anssqt);

let people = [
    {firstname : "Jimmy", lastname: "Brown"},
    {firstname : "Cindy", lastname: "Malcolm"},
    {firstname : "Timothy", lastname: "Stumps"}
    ];

function getFullName(item,index){
    let fullName = [`${index}: ${item.firstname}${item.lastname}`].join(" ");
    return fullName;
}
let names = people.map(getFullName);

console.log(names);

// The difference between map() and forEach() is that map actually returns something (a newarray), while the forEach() method returns nothing (undefined).

// This is key. Once you have that, just remember that map() iterates over an array, calling a function foreach element, and returning the transformed elements into a new array of the same size.