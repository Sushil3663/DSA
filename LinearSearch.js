let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = 5;
function LinearSearch(array, target) {
    // console.log(target, array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i

        }
    }
    return -1

}

console.log(LinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
console.log(LinearSearch(arr, num))
console.log(LinearSearch(arr, 12))


