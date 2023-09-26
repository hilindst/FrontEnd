const numOneString: string | null = prompt('Enter a number: ');
let numOne: number = Number(numOneString);

const numTwoString: string | null = prompt('Enter a number: ');
let numTwo: number = Number(numTwoString);

function fourMaths(numOne, numTwo) {
  console.log(numOne + numTwo);
  console.log(numOne - numTwo);
  console.log(numOne * numTwo);
  console.log(numOne / numTwo);
}

fourMaths(numOne, numTwo);