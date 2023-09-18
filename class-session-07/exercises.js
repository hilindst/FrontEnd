//Exercise 1

class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
  addObserver(observer) {
    this.observers.push(observer);
    console.log(this.observers);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter(arr => arr !== observer);
		console.log("Observer removed!");
		console.log(this.observers);
  }
  notifyObserver() {
    this.observers.forEach((observer) => observer.update());
		console.log("Notified observers!");
  }
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const newSubject = new Subject();
newSubject.addObserver(observer1);
newSubject.addObserver(observer2);
newSubject.addObserver(observer3);
newSubject.notifyObserver();
newSubject.removeObserver(observer2);


//Exercise 2
/* 
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

let {name, age, address: {city, country}, address} = person;

console.log(person.name);

let [a, b, c, d] = fruits;

console.log(b);
console.log(d);

console.log(person.address.city + ', ' + person.address.country);

 */
//Exercise 3
/* async function fetchPosts() {
	try {
    const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const res = await url.json();
    console.log("Async/Await Url: ", res);
  } catch (err) {
    console.log("Error: ", err);
  }
}

fetchPosts();//success! */


//Exercise 4
/* class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(fn) {
		this.observers.push(fn);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter((sub) => sub !== fn);
    return sub;
	}

	notifyObservers(data) {
		this.observers.forEach(this.fetchAndNotify)
	}

	async fetchAndNotify() {
		try {
      const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const res = await url.json();
      console.log("Async/Await Url: ", res);
    } catch (err) {
      console.log("Error: ", err);
    }

		// TODO: Fetch data from the API and notify observers
	}
}
 */
/* class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}
 */
// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
