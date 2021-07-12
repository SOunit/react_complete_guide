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
