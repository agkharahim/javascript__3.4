let arr = [17, 3, 4, 5, 16, 28, 22, 30];

function sort(arr) {
    let n = arr.length;
    for (let i=0; i<n; i++) {
        
        for (let j = 0; j < n; j++) {
            if (arr[j]>arr[j+1]) {
                let element = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = element;
            }

        }
    }
    return arr;
}

console.log(sort(arr));