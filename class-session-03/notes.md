javascript is client-side: executes on my computer
data types, variables, operators, conditionals, loops
"The Lex Friedman Podcast" -javascript creator interview
open terminal in GitBash

javascript in index.html file body with <Script>
  #id, .class,
  better way-create a new .js file and link <script src="./main.js"></script>

   Why does javascript need to be at the bottom?
      Browser reads html top to bottom left to right, so it needs to know all the content before processing javascript 


 Commenting 
    shift+alt+a
    //
    ctrl+/

const :constant, immutable, data can not be changed "Constantly the same"
let  :mutable, changeable variable "Let me change it"
var  :deprecated, not strict enough becoming outdated


Data Types
  String-pay attention to quotes in your strings XD 'there's' vs "there's", 'they said "hello"'
    '' -single quotes
    "" -double quotes
    `` -backtick (specific purpose too)=
  Number
    Floating Point Number
    Integer
  Boolean
    true  2+2=4 //truthy
    false  2+2=5 //falsy
    let sock = false;
  Object
    const student ={
      <!-- //key value properties: Keys  -->
      name: 'Marcella',
      isPresent: true,
      favFood: ['mexican', 'italian', 'chocolate'],
    };
<!-- string interpolation -->
    const greeting = `Hello, ${student.name}. Welcome to Codelabs!`
    console.log(greeting);
  Array
    [Index of items, lists, 'string', 12, '{pickle: 'Dill}, flase, [more arrays]]
    const users = ['hilary', 'charles', 'joules']; 
      console.log(users[0]); //hilary, starts at 0
  Special
    null: explicit value, defined as null or empty, intentional absence
    undefined: never defined
      let user;
      console.log(user);  //undefined
    NaN: not a number
  Operators  (PEMDAS)  
    <!-- learn these and all the extra ones -->
    arithmetic operators
      + : addition
        'hello ' + 'how are you' = hello how are you  //"string concatnation"
      - :subtraction
    comparative operators
      5 > 4 //Boolean true "truthy"  greater than
      5 > 6 //Boolean false "falsy"  greater than
      5 < 4 // falsy  less than
      5 >= 6 // falsy greater than or equal 
      6 >= 6 //truthy greater than or equal
      4 <= 5 //truthy less than or equal
      6 === 6 //true  strict comparison/equality, no type coercion
      6 === '6'//false different types
      6 == '6'//true loose comparison
      6 !== 6// false (because 6 = 6 (true))  this hurts my head

  &&  'and'
  ||  'or'

  Conditional
  <!-- if/then, etc statements -->
  const user = {
    username: "brainiac",
    password: "pass123",
  };

  if (user.username === "brainiac" && user.password === 'pass123'){  <!-- //strict comparison -->
    console.log("hello!");
  } else {
    console.log("Who goes there?");
  }

  Loop
  const myArr = ['hilary', 'charles', 'joules'];

  for (let student of myArr) {
    console.log(student);
  } <!-- displays students in array -->

  myArr.forEach((student)=> {
    console.log(student);
  });  <!-- displays students in array -->