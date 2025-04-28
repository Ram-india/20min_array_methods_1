// **** ===== Reduce ==== **** //

let basket= [4,6,8,2];

let total = basket.reduce((accumulator, currentValue) => accumulator + currentValue);
//console.log(total);

function appleCount(total, apple){
    return total + apple;
}
let totalApple = basket.reduce(appleCount,20);
console.log(totalApple);