const prompt = require("prompt-sync")({sigint: true});

let rigged = Number(prompt("Enter the rigged number between 1 and 6: "));

let roll = Math.ceil(Math.random()*7);

console.log("Actual roll is: " + roll);
if (roll === 7){
    console.log("Your number is: " + rigged);
} else {
    console.log("Your number is: " + roll);
}