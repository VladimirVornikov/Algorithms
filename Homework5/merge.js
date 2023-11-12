const array1 = [34, 54, 1, 4, 65, 100, 97, 10, 2, 3, 6];

const mergeSort = function merge(arr) {
    if (arr.length < 2) {
        return arr;
    }  else {
        const left = merge(arr.slice(0, arr.length/2 ))
        const rigth = merge(arr.slice(arr.length/2))

        let i = j = 0;

        const sortedArray = [];

        while (i < left.length && j < rigth.length) {
            if(left[i] === rigth[j]) {
                sortedArray.push(left[i], rigth[j]);
                i++;
                j++;
            } else if (left[i] < rigth[j]) {
                sortedArray.push(left[i])
                i++;
            } else {
                sortedArray.push(rigth[j]);
                j++;
            }
        }
        
            if (i !== left.length) {
                return sortedArray.concat(left.slice(i))
            } else if (j !== rigth.length) {
                return sortedArray.concat(rigth.slice(i))
            }
            return sortedArray
    }
}
console.log(mergeSort(array1));