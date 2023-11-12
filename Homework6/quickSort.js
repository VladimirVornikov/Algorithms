const array = [1, 4, 30, 2, 50, 9, 13, 5];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } 
    const mid = Math.round(arr.length/2)
    const pivot = arr[mid] 
    const less = [];
    const greater = [];
    
    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element > pivot ) {
            greater.push(element);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
};

console.log(quickSort(array));