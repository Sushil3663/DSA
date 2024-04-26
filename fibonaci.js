// function Fib(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return Fib(n - 1) + Fib(n - 2);
//     }
// }

// function fibo(n) {
//     let a = 0, b = 1, c, i;
//     if (n === 0) {
//         return 0
//     }
//     if (n === 1) {
//         return 1
//     }
//     for (i = 2; i <= n; i++) {
//         c = a + b;
//         a = b
//         b = c;
//     }
//     return b
// }

// let d = fibo(5)
// let e = Fib(5)

// console.log(d)
// console.log(e)

function fibo(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr

}
console.log(fibo(4))