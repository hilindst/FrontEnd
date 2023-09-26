##Typescript


getting started
using NPM (node package manager)
  defined in files called package.json
Installing:
  1) npm init -y
  2) npm install typescript --save-dev
  3) npx tsc "name of your main.ts file"
     1) compiler creates a main.js file that you can link in your html

*having that js and ts file in the same folder will create duplicate errors (separate folders recommended)

base/primitive types
string, number, boolean
complex types
array, object

union types |

explicit type
let firstName: string = "nolan'; //type string

implicit type
let firstName = "andrew"; //inferred to type string

array
let ourClass: string[];


Generics
type parameters: T or <T>
type-safe generic functions

when function is called specify type
  let userOneId =  getId<string>("String_ID");
  let userTwoId =  getId<number>(124);

Aliases & Interfaces
type CodeCoach = {
  name: string,
  roomAssign: number;
  isCoach: boolean;
};

let coackMike: Code Coach = {
  name: Michael,
  roomAssign: 10,
  isCoach: true,
};


Interfaces- only apply to object types
  inferface Rectangle {
    height: number;
    width: number;
  }
  const rectangle: Rectangle = {

  }

  class RectangleImpl implements Rectangle {
    height: number;
    width: number;
  

    constructor(height: number, width: number){
      this.height = height;
      this.width = width;
    }
  //calling a method
  calculateArea(){

  }
  }
    const rectangle: Rectangle = new RectangleImpl(10, 20);


    


CLASSES
class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses(): string[]{
    return this.courses.slice();
  }
}

const studentOne = new Student("Hilary", "Lindstrom", ["Angular", "JavaScript", "React"])

studentOne.firstName = 'Jeeves";   //public property
studentOne.lastName = "Bartholemew"; //public property
studentOne.courses = ["Harvard CS50"]  //ERRROR private
*Private properties can only be changed or viewed with a class method
studentOne.enroll("Harvard CS50");

console.log(studentOne);

class 3-8 recreate exercises
recreate to-do list or stopwatch