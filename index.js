/*If you're hungry, you make a sandwich. If the traffic light is green, you press the gas pedal. If your rent is due, then you pay your rent. This breaks down into a lot of conditional choices:

if hungry → make sandwich.
else → don't make sandwich.
if light is green → press gas pedal.
else → press brake pedal.
if it's the first of the month → pay rent.
else → don't pay rent.
Writing code involves the same type of logic — we only want an action to happen if a certain condition is met. In the programming world, this is called control flow because, well, it helps control the flow of an application. */

// How to Use Conditional Statements
// if statement

// To write a basic if statement, we use the following structure

// if (condition){
//     // Block of code
// }

/*It consists of the if keyword followed by the condition
to be checked in parentheses. After that comes a block statement
(more commonly called a code block): one or more JavaScript expressions
or statements enclosed in {}. The code block contains the code we want to 
execute if the condition returns a truthy value */

// const age = 30;
// let adult;

// if (age >= 18){
//     isAdult = true;
    
// }
// console.log(isAdult)

// const myAge = 17
// let realAdult;

// if(myAge >= 18){
//     Adult = true
// }
// else if (myAge === 18){
//     Adult = "nearing to"
// }
// else{
//     Adult = false
// }
// console.log(Adult)


// Ternary Expressions
// syntax example

// const age = 26;

// let isAdult;

// age >= 18 ? (isAdult = true) : (isAdult = false);


// Switch statement
/*const order = 'cheeseburger';

let ingredients;
if (order === 'cheeseburger') {
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
} else if (order === 'hamburger') {
    ingredients = 'bun, burger, lettuce, tomato, onion';
} else if (order === 'malted') {
    ingredients = 'milk, ice cream, malted milk powder';
} else {
    console.log("Sorry, that's not on the menu right now.");
} */


/* Using Switch*
const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}*/

const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}
console.log(ingredients)


