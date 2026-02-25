// Arrays
// Array methods - push(), pop(), unshift(), shift(), 
// Fruit Basket Calculator
let fruitBasket = ["Apple", "Banana", "Cantaloupe", "Dates", "Elderberry"];

console.log(fruitBasket.length);
fruitBasket.push("Dingleberry", "Strawberry");
console.log(fruitBasket);

fruitBasket.pop();
console.log(fruitBasket);

fruitBasket.unshift("guava", "avocado");
console.log(fruitBasket);
fruitBasket.shift();
console.log(fruitBasket);

// Loops -- forEach, forIn, map, filter, reduce
for (let index = 0; index < 7; index++) {
    console.log(fruitBasket[index]);
    
}
fruitBasket.forEach((fruit, index) =>{
    console.log(fruit);
    console.log(index);
});
fruitBasket.map((fruit, index) =>{
    console.log(fruit);
    console.log(index);
});


function countFruits() {
    console.log("There are " + fruitBasket.length + " fruits in the basket.");
}
countFruits();



// Raise to Power Method
console.log(Math.pow(2,4));

// Custom Power function
// Function Declaration
function Pow(a,b) {
    return a**b;
}
console.log(Pow(2,4));

// Square root
console.log(Math.sqrt(256));

// Custom Square root function
// Function expression
const squareRoot = function(z){
    let result = z**0.5;
    return result;
}

let div = squareRoot(256)
console.log(div);

// arrow function - const functionName = () => {};
const Division = (x,y) => {
    let result = x / y;
    return result;
};
console.log(Division(256, 8));


// Objects
let profile = {
    name: "James",
    age: 30,
    admin: true,
};

// dot notation
console.log(profile.age);

// bracket notation
console.log(profile["age"]);