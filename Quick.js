function Quick(arr) {
    if (arr.length < 2) {
        return arr
    }

    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])

        }
    }
    return [...Quick(left), pivot, ...Quick(right)]

}

console.log(Quick([2, 1, 3, -2, -6]))

const heroes = ['Batman', 'Superman'];
const villains = ["sk"];

const all = [...heroes, ...villains];
const a = [...[], 1, 2, 3, ...[4], 5];

console.log(all);
console.log(a);

// [ -6, -2, 1, 2, 3 ]
// [ 'Batman', 'Superman', 'sk' ]
// [ 1, 2, 3, 4, 5 ]