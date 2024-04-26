// function Power(n) {

//     if (n === 0) {
//         return false
//     }
//     else {
//         while (n != 1) {
//             console.log(n)
//             if (n % 2 != 0) {
//                 return false;
//             }

//             n = n / 2;
//         }
//         return true
//     }

// }
// console.log(Power(1))
// console.log(Power(2))
// console.log(Power(3))
// console.log(Power(4))
// console.log(Power(5))
// console.log(Power(7))


// n =  2^ x
function Power(n) {
    if (n == 0) return false;
    return (n & (n - 1) === 0);
}

console.log(Power(1))
console.log(Power(2))
console.log(Power(3))
console.log(Power(4))
console.log(Power(5))
console.log(Power(7))