"use strict"

let num1 = prompt("Please enter num1");
let num2 = prompt("Please enter num2");
function evennumbers(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    if (b > a) {
        for (let i = 0; i <= b; i++) {
            if (i % 2 == 0) {
                console.log(i);
            } 
        }
    } else {
        alert("1st number has to be smaller than 2nd")
    }
}

console.log(evennumbers(num1, num2));