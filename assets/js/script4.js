
// function removeSameValues(arr) {
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArray.indexOf(arr[i]) === -1) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }


// var mainArray = [1, 2, 3, 4, 2, 5, 6, 1];
// var newArray = removeSameValues(mainArray);

// console.log("Old Array:", mainArray);
// console.log("New Array after deleted:", newArray);

var mainArray = [1, 2, 3, 4, 2, 5, 6, 1, 6, 7]; 

function removeSameValues(arr) {
    let newArray = arr.filter((item, index) =>  arr.indexOf(item) === index);
    return newArray;

}

console.log(removeSameValues(mainArray));