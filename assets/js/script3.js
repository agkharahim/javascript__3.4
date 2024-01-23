let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let mult = 1;

console.log(arr);

// for (i=0; i<arr.length; i++) {

//     sum += arr[i];
//     mult *= arr[i];  
    
// }

//     console.log(sum);
//     console.log(mult);

arr.forEach(function (item){
    sum += item;
    mult *= item;
} )

console.log(sum);
console.log(mult);