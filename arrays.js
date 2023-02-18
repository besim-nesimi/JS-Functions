// const person = {
//     name: "Besim Solo",
//     profession: "Smuggler",
//     age: 28,
//     spaceship: {
//         name: "Millenium Falcon",
//         hyperDrive: true,
//     },
// };

// console.log(person.spaceship.name)

// En array med karaktärer(skapade objekt)
const chars = [
    {name: "Han Solo", profession: "Smuggler"}, 
{name: "Leia Organa", profession: "Diplomat"}, 
{name: "Darth Vader", profession: "Sith Lord"}, 
{name: "C3P0", profession: "Protocol Droid"}
]


// // Alternativ 1 - mest kod, men tydligast
// console.log("-----------------")
// console.log("Alternative 1")
// chars.forEach(print);

// function print(character) {
//     console.log(character.name)
// }


// // Alternativ 2 - mindre kod, fortfarande tydligt
// console.log("-----------------")
// console.log("Alternative 2")

// chars.forEach(function(character) {
//     console.log(character.name)
// });

// Alternativ 3 - Best practice
// console.log("-----------------")
// console.log("Alternative 3")

// chars.forEach(character, index, array => {
//         console.log(index);
//         console.log(array.lenght);
//         console.log(character.name);
//     });

// Printa Darth Vader - 
// chars[2].name betyder arrayens andra index, 
// objektets namn(om objektet har proeprty name).

// console.log(chars[2].name)
// const jsonChars = JSON.stringify(chars);
// console.log(jsonChars);


// Map - tar varje värde i en array och gör nånting (i detta fallet n*2) och skapar ny array

// const numbers = [19, 19, 29, 11, 441, 4991, 47612, 28, 48, 12];

// const doubleNumbers = numbers.map(n => {return n*2});

// console.log(doubleNumbers);

// Filter - returnerar en ny array som map

// const smugglers = chars.filter(c => c.profession == "Smuggler");

// console.log(smugglers);


// Sortera från lågt till högt ex

// const numbers = [19, 19, 29, 11, 441, 4991, 47612, 28, 48, 12];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

let letterA = "A";
let letterB = "B";

if(letterA > letterB) {
    console.log("A is better than B")
} else if (letterA === letterB) {
    console.log("A annd B are the same");
} 
else 
{
    console.log("B is Bigger than A")
}