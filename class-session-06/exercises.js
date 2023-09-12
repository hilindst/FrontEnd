//Exercise 1:

/* console.log("'This' in Global Scope:", this); //global use of This */


/* const libraryUser = {
	desk: '1',
	users: ['Valory', 'Zane', 'Ipsum'],
	printUsers: function () {
		console.log("'this' in Implicit Scope (Function Dec):", this.users);
	},
	printUsersES6: () => {console.log(this.users)}, // 'this' refers to the global window object here and is undefined
};

libraryUser.printUsers();
libraryUser.printUsersES6(); */

//Exercise 2

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, ${this.name}.`);
  }
}

const evan = new Person('Evan', 27);
const julia = new Person('Julia', 35);
evan.greet();
julia.greet(); */

//Exercise 3
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  happyBirthday(){
    console.log(`Happy Birthday, ${this.name}! You are ${this.age} years old!`)
  }
}

const evan = new Person('Evan', 27);
const julia = new Person('Julia', 35);
evan.happyBirthday();
julia.happyBirthday(); */

//Exercise 4  this helped me https://www.scaler.com/topics/javascript/static-methods-in-javascript/

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static info(){
    return "This is a Person class.";
  }
  happyBirthday(){
    console.log(`Happy Birthday, ${this.name}! You are ${this.age} years old!`)
  }
}

const evan = new Person('Evan', 27);
const julia = new Person('Julia', 35);
evan.happyBirthday();
julia.happyBirthday();
console.log(Person.info());//"this is a person class"!! yay I did it
console.log(evan.info());//"not a function" because static affects Class not instantiated objects of the class */


//Exercise 5 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge(){
    return this.age;
  }

  setAge(newAge){
    if (newAge < 0){
      return 'Age cannot be less than 0';
    } else
    this.age = newAge;
  }

  static info(){
    return "This is a Person class.";
  }
  happyBirthday(){
    console.log(`Happy Birthday, ${this.name}! You are ${this.age} years old!`)
  }
}

const evan = new Person('Evan', 27);
const julia = new Person('Julia', 35);
const hilary = new Person('Hilary', 37);
/* evan.happyBirthday();
julia.happyBirthday();
console.log(Person.info());//"this is a person class"!! yay I did it
console.log(evan.info()); */
hilary.happyBirthday();
hilary.setAge(-7);
hilary.happyBirthday();
