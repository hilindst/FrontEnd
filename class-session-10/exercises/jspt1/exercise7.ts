const x: string | null = prompt("Enter a number: ");
let n: number = Number(x);

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

let answer = factorial(n);
console.log("Factorial of " + n + " : " + answer);