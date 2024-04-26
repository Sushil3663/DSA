function Prime(n) {
    if (n < 2) {
        return false;
    }
    else if (n % 2 == 0) {
        // console.log("Not a prime Number");
        return false;
    }
    else {
        // console.log("Prime number");
        return true
    }
}

console.log(Prime(1))
console.log(Prime(2))
console.log(Prime(4))
console.log(Prime(5))