// Exercise 1: Identify Scopes

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?  YES outer local
		console.log(innerVar); // Can we access innerVar?  YES local
	}

	innerFunction();
}

outerFunction();  
//result : I'm outside!
//         I'm inside!

//Exercise 2: Draft a JavaScript function where you call a function before its declaration. Analyze the behavior and understand how hoisting impacts the outcome.


function mainFunction() {
	console.log('Hello!'); // Call the hoistedFunction here
	// Now, declare the hoistedFunction below
}
mainFunction();

//Result: No change whether call is placed beneath or above the function because of hoisting-function "hoisted" to the top.

//Exercise 3:Develop a JavaScript function that returns another function. The inner function should have access to variables from the outer function's scope.
function doubleFunction(){
  let x = 3;
  function innerFunction(){
    let y = 7;
    console.log(x + y);
  }
  return innerFunction();
}
doubleFunction();

//Exercise 4 Declare a global variable outside of any function.Create a function that tries to modify that global variable. Create another function that declares a local variable with the same name. Observe the behavior when calling both functions.

let breed = "Basenji";

function myDog(){
 let breed = "Malinois";
 console.log(breed);
}

function myTinyDog(){
   let breed = "Chihuahua";
   console.log(breed);
}

myDog();
myTinyDog();
myDog();
console.log(breed);

//Result: the variable is accurate on all levels of scope depending on how it's called.

//Exercise 5: Design a function that accepts a parameter. The function should return another function that uses the parameter in some way.

function functionFactory(name) {
  function sonOf() {
    console.log(`Greetings! ${name}, son of Gloin`);
  }
  return sonOf();
}
functionFactory("Gimli");

// Create an instance of the inner function by invoking functionFactory with a parameter

//Exercise 6: Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.
function hoistingTest() {
  console.log(car);
  let car = "Subaru";
}
hoistingTest();

//Result: Error: Cannot access 'car' before initialization. Javascript does not hoist variable declarations?

//Exercise 7:Create a function that sets up a counter using closures.The outer function should define a count variable. The inner function should increment and print the count each time it's invoked.

function counter(){
 let num = 0;
function increment(){
    num++;
    console.log(num);
  }
  increment();
}

counter();
//increment increments each time its called within counter. Cou8nter does not increment because it's calling on the variable declared in that outer function.

//Solution via emeric
function setupCounter(){
  let count = 0; //count variable defined
 return function (){
    count++;//inner function  increments and logs the count
    console.log(count);   
 };
}

const counter = setupCounter();//invoke "create a counter instance(?)"
counter();

//Exercise 8: Create a function that initializes a counter variable. This function should return another function. The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself. Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it. Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.*

function setupCounter(){
  let count = 0; 
 return function (){
    if (count == 10){
      count = 0;
      return;
    }  
    count++;
    console.log(count);
 };
}

const counter = setupCounter();
for (let i = 0; i < 15; i++){
  counter();
}


//Exercise 9 solution via Emeric

const gameScrore = 0;
function updatedScore() {
  gameScrore++;
}

function displayPlayer(){
  player += ": player 1"; //addition before player declared
  const player = "Emeric";
  console.log("Player: " + player);
}

displayPlayer();

function gameScore(){
  let startingScore = 0;
  return function (){
    startingScore++;
    console.log(startingScore);
  }
}
const score = gameScore();
for (let i = 0; i < 15; i++){
  score();
}