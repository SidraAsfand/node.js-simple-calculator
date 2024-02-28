"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let x = parseInt(prompt("please enter your first value: "));
let y = parseInt(prompt("please enter your second value: "));
let op = prompt("please enter your first operator ");
if (op == "+") {
    console.log(`${x + y}`);
}
if (op == "-") {
    console.log(`${x - y}`);
}
if (op == "*") {
    console.log(`${x * y}`);
}
if (op == "/") {
    console.log(`${x / y}`);
}
else {
    console.log("please select correct operator");
}
