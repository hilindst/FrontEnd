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
/* class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  static info(){
    return "This is a Person class.";
  }
  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0){
      console.log('Age cannot be less than 0');
    } else {
    this._age = value;
    }
  }

  
  happyBirthday(){
    console.log(`Happy Birthday, ${this._name}! You are ${this._age} years old!`)
  }
}

const evan = new Person('Evan', 27);
const julia = new Person('Julia', 35);
const hilary = new Person('Hilary', 37);
/* evan.happyBirthday();
julia.happyBirthday();
console.log(Person.info());//"this is a person class"!! yay I did it
console.log(evan.info()); */
/* hilary.age=-6;//console log message, then runs original input in const...
hilary.age=60;
hilary.happyBirthday(); */

//Exercise 6 in Private Fields in Classes repository


//Exercise 7  definitely need more insight. Would I use methods like for an array?
class Library {
  constructor(book){
  book(ISBN, title, author, yearPublished) {
      this.#ISBN = ISBN;
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;
    }
  }

  get book() {
    return this.title + this.author + this.yearPublished;
  }

  set addBook(book){
    [this.title, this.author, this.yearPublished] = book;
  }

  removeBook(bookTitle){
    for (let i = 0; i < this.books.length; index++){
      const book = this.books[i];
      if(book.title == bookTitle){
        this.books.splice(i);
      }
    }
  }

  listBooks(){
    for (const book of this.books){
      console.log(`${book.title} by ${book.author} published in ${book.yearPublished}`)
    }
  }
}


const book1 = new Book(1234, "The Dreaming Tree", "C.J. Cherryh", 1997);
const book2 = new Book(2345, "Catch-22", "Joseph Heller", 1961);