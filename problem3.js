/* The “this” keyword works differently in arrow functions vs regularly declared functions.
Explain how the “this” keyword works differently in arrow functions vs normal functions.
Write some code that shows that you understand the difference between how the “this” keyword is used. 
Make sure to go into detail as you explain your code to the class */

const luffy = {
    name: "Monkey D. Luffy",
    crew: "Straw Hat Pirates",
    regularAttack: function (){
        console.log(`I am ${this.name} from the ${this.crew}! Gomu Gomu no Pistol!`);
    },
    arrowAttack: () => {
        console.log(`I am ${this.name} from the ${this.crew}! Gomu Gomu no Pistol!`);
    }
};

luffy.regularAttack();
luffy.arrowAttack();


// const naruto = {
//     name: "Naruto Uzumaki",
//     village: "Hidden Leaf Village",
//     regularJutsu: function(){
//         console.log(`I am ${this.name} from the ${this.village}! Shadow Clone Jutsu!`)
//     },
//     arrowJutsu: () => {
//         console.log(`I am ${this.name} from the ${this.village}! Shadow Clone Jutsu!`)
//     }
// };

// naruto.regularJutsu();
// naruto.arrowJutsu();