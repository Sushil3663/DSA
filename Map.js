// let map = new Map([["a", 1]]);

// map.set("c", 3)
// map.delete("a");
// map.has("b");
// map.size
// map.clear();

// for (let [key, value] of map) {

//     console.log(`${key}: ${value}`);
// }
var keys = [5, 2, 3, 6, 10];

var values = ["Geeks", "for", "Geeks", "Course", "Algorithm"];

var map = new Map();



for (var i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
}

console.log(map.get(keys));
console.log(map.values());