let arr = [3, 17, 'hyperX', 20, 'steelseries', 'logitech', 77, 128];

console.log(arr);

function removeString (arr) {
    return arr.filter(function (element) {
        return typeof element === 'number';
    });
}

let newArray = removeString(arr);

console.log(newArray);
