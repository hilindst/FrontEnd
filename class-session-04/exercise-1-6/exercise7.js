//Exercise 7 Instructions: Use the Date object to display the current date and time on the console.
/* console.log(new Date().getDate()); */

//Exercise 8 Instructions: Use the Math object to generate a random number between 1 and 10 and display it on the console.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random()*(max-min)+min));
}
getRandomInt(1, 10);
getRandomInt(1, 10);
getRandomInt(1, 10);
getRandomInt(1, 10);