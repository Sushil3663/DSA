let numArray = [1, 2, 3, 4, 5]
function BinarySearch(arr, l, r, key) {
    if (l === r) {
        if (arr[l] == key) {
            return l
        }
        else {
            return -1;

        }
    }
    else {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === key) {
            return m;
        } else if (arr[m] > key) {
            return BinarySearch(arr, l, m - 1, key);
        } else {
            return BinarySearch(arr, m + 1, r, key);
        }
    }
}


console.log(BinarySearch(numArray, 0, numArray.length - 1, 2))

let numArrays = [1, 2, 3, 4];

function BinarySearching(arr, l, r, key) {
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === key) {
            return m
        }
        else {
            if (arr[m] === key) {
                return m;
            } else if (arr[m] > key) {
                return BinarySearch(arr, l, m - 1, key);
            } else {
                return BinarySearch(arr, m + 1, r, key);
            }
        }
    }
    return -1
}

console.log(BinarySearching(numArrays, 0, numArray.length - 1, 2));


