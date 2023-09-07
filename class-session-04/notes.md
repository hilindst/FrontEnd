DRI : Don't Repeat Yourself
DAMP : Don't Repeat Yourself unless necessary
write once, execute many
define a function, then call it
  function learnToCode() {
    //code
  }
  learnToCode();   or console.log(learnToCode(parameters));

  let x = gradeAssignment (89);
  console.log(x);

default parameter value


Anonymous Function : Arrow Functions =>
const learnToCode = (student) => {
  console.log('hello!');
}
learnToCode('nolan'); //hello!

const greet = function() {
  console.log(
    'hello'
  );
}
greet();

creating an object
  const student = {
    name: 'Jacob',
    shouldBuildProjects: true,
    age: '700',
  }

const filterWord = 'name'; //didn't work in example....

accessing objects  key: value pairs
1) console.log('Dot Notation:', student.name);
2) console.log('Bracket Notation:', student['name']);
3) console.log('Dot Notation with Variable:', student.filterWord); //didn't work in example
4) console.log('Bracket Notation with Variable:', student[filterWord]);

built-in string methods
