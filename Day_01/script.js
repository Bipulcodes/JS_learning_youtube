//✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let person_name = "Bipul";
const person_age = 34;
const isStudent = false;
let favorite_prog_lang = "javascript";
console.log(person_name, person_age , isStudent , favorite_prog_lang);


//✅ Task 2: Print the values to the console.
/* person_name = "notbipul";
person_age = 24;
isStudent = true;
favorite_prog_lang = "onlyJava"; */

//✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

let obj1 ={
    name:"bipul",
    age:34,
    isStudent:false,
    fav_lang:"javaScript"
}

let obj2 = obj1;
obj2.name = "who is this?"

console.log(obj2);
/* so observed that this are getting changed in master level data instead of getting changed at second object */