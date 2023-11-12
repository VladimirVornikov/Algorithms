const array1 = [100, 112, 256, 349, 770]
const array2 = [72, 86, 113, 119, 265, 445, 895]

function findNumber(arr1, arr2, k) {
    const newSortedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newSortedArray.push(arr1[i]);
            i++;
        } else {
            newSortedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        newSortedArray.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        newSortedArray.push(arr2[j])
        j++;
    }

    return newSortedArray[k];
}
console.log(findNumber(array1, array2, 6));