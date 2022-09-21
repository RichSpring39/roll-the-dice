const prompt = require('prompt-sync')({sigint: true});
 
let choice = prompt("choose a number between 2 and 6: ")

if(choice === "2"){
console.log(Math.ceil(Math.random()*2));
}else if(choice === "3"){
    console.log(Math.ceil(Math.random()*3));
}else if(choice === "4"){
    console.log(Math.ceil(Math.random()*4));
}else if(choice === "5"){
    console.log(Math.ceil(Math.random()*5));
}else if(choice === "6"){
    console.log(Math.ceil(Math.random()*6));
}