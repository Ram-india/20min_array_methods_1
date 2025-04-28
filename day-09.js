// ==== forEach() ==== //

let numbers = ["5", "4", "3", "2", "1", "0"];

// numbers.forEach(function (value, index) {
//   console.log(`value: ${value}, index: ${index}`);
// })


numbers.push("6","9","300","550","555.55");


numbers.forEach((value, index)=>{
    console.log(`value: ${value}, index: ${index}`);
})