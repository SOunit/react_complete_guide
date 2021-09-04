// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parametars
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Primitives
var age = 15;
age = 10;
age = 12.1;
// age = '123';
var userName;
userName = 'Jack';
var isInstructor;
isInstructor = true;
// more complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = { name: 'Jack', age: 38 };
var people;
people = [person, { name: 'Rebecca', age: 38 }];
// type inference
var corse = 'React - The complete guide';
// union type
var course2 = 'React';
course2 = 10;
var userName2;
userName2 = 'Jack Pearson';
userName2 = ['Jack', 'Pearson'];
var person2;
person2 = { name: 'Jack', age: 38 };
var people2;
people = [person2, { name: 'Rebecca', age: 38 }];
// Functions & types
function add(a, b) {
    return a + b;
}
// type inference
function add1(a, b) {
    return a + b;
}
function printValue(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
