// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parametars

// Primitives
let age: number = 15;
age = 10;
age = 12.1;
// age = '123';

let userName: string;
userName = 'Jack';

let isInstructor: boolean;
isInstructor = true;

// more complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: { name: string; age: number };
person = { name: 'Jack', age: 38 };

let people: { name: string; age: number }[];
people = [person, { name: 'Rebecca', age: 38 }];

// type inference
let corse = 'React - The complete guide';

// union type
let course2: string | number = 'React';
course2 = 10;

let userName2: string | string[];
userName2 = 'Jack Pearson';
userName2 = ['Jack', 'Pearson'];

// type aliases
type Person = { name: string; age: number };
let person2: Person;
person2 = { name: 'Jack', age: 38 };
let people2: Person[];
people = [person2, { name: 'Rebecca', age: 38 }];

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

// type inference
function add1(a: number, b: number) {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

// Generics

// why this exists?
// for asigning type for the case below
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
// type is any, no check by typescript
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);

// how to use it?
function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray2 = [1, 2, 3];
// this keeps type
const updatedArray2 = insertAtBeginning2(demoArray, -1);

// this keeps type too
const stringArray = insertAtBeginning2(['a', 'b', 'c'], 'x');
