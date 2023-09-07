/* const user = prompt("Enter your name: ");
  alert(`Welcome, ${user}`); */

const n = prompt("Enter a number: ");

function factorial(n){
  if(n < 0){
      return "number has to be positive."
  }
  
  if(n == 0 || n == 1){
      return 1;
 
  }else{
      return n * factorial(n-1);
  }
}

answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);