var x = prompt("Enter a number: ");
var n = Number(x);
function factorial(n) {
    if (n < 0) {
        return "number has to be positive.";
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var answer = factorial(n);
console.log("Factorial of " + n + " : " + answer);
