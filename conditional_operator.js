function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(11, 11));

function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
        : "zero";
}

console.log(checkSign(10));

