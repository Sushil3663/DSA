function fact(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result

}
console.log(fact(0));


function repeat(n) {
    if (n == 0) {
        return "hello";
    }
    else {
        console.log("hello")
        return repeat(n - 1);
    }

}
repeat(3)