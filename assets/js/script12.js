// let arr1 = [1,2,3];

// let arr2 = arr1;

// console.log(arr2);

// arr1.push(4);

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

let arr3 = [1,2,3,4];

let arr4 = [1,2,3];

let arr5 = [];

if (arr3.length !== arr4.length) {
    console.log("This is not same.");
}

else {
    for (i=0; i<arr3.length; i++) {
        if (arr3[i] === arr4[i]) {
            arr5.push(true);
        }
        else {
            arr5.push(false);
        }
    }

    if (arr5.includes(false)) {
        console.log("This is not same.");
    }
    
    else {
        console.log("This is same.");
    }
}






