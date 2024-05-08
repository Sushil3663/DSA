let set = new Set([1, 2, 3]);
set.add(4)
console.log(set.size)
console.log(set.has(4))

set.delete(4)
set.clear()
// for (let item of set) {

//     console.log(item);
// }


let remove = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

let unique = [...new Set(remove)]

let set2 = new Set([1, 2, 3, 3]);
// console.log(set2)
// console.log(unique)

let set3 = new Set();

set3.add(4)

console.log(set3);