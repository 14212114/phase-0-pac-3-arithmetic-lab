function add(a, b){
    return a + b
}
console.log(add(x, y));

function subtract(a, b){
    return a - b;
}
console.log(subtract(x, y));

function multiply(a, b){
    return a * b;
}
console.log(multiply(x, y));

function divide(a, b){
    return a / b;
}
console.log(divide(x, y));

function increment(n) {
    return (n += 1);
}
console.log(increment(783));

function decrement(n) {
    return (n -= 1);
}
console.log(decrement(456));

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt("7.555"));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal("77.9856"));