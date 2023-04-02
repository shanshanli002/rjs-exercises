import { choice, remove } from "./Helpers";
import fruits from "./Foods";

const randomFruit = choice(fruits);

console.log("I would like one ", randomFruit, " please");
console.log("Here you go: ", randomFruit);
console.log("Delicious! May I have anothher? ");
remove(fruits, randomFruit);
console.log("I'm sorry, we're all our. We have ", fruits, " left.");
