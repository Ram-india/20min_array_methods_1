// =======filter()====== //

let age =  ["35", "14", "52", "21", "11", "80", "18", "17"];

let adult = age.filter(function(element){
    return element >=18;
})
//console.log(adult);

let under60 =age.filter((element,index)=>{
    if(element >= 18 && element <= 60){
       // console.log(index)
    }
})
//console.log(` under69 = ${index},${typeof under60}`);
let dayOfTheMonth = ["3", "15", "22", "2", "8", "30", "23"];

function secondHalf(element, index){
    if (element > 15) {
    return element + " has an index of " + index;
    }}

let thirdHalf = (element) => {
    if(element >= 18 && element <= 20);
    return element;
}
    
    console.log(`Thired half ${dayOfTheMonth.filter(thirdHalf)}`);