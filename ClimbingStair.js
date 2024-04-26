function Climbing(n) {
    let noOfStair = [1, 2]
    for (let i = 2; i < n; i++) {
        noOfStair[i] = noOfStair[i - 1] + noOfStair[i - 2]
    }
    return noOfStair[n - 1]
}
console.log(Climbing(1))
// console.log(Climbing(2))
console.log(Climbing(3))
console.log(Climbing(4))
console.log(Climbing(5))