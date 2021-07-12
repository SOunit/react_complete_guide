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

// type aliences
type Person = { name: string; age: number };
let person2: Person;
person2 = { name: 'Jack', age: 38 };
let people2: Person[];
people = [person2, { name: 'Rebecca', age: 38 }];
