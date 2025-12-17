// 1. Access the DOM elements and store them in variables:
const appleShelf = document.getElementById("apple-shelf");
const orangeShelf = document.getElementById("orange-shelf");
const bananaShelf = document.getElementById("banana-shelf");

const fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"];

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];

    if (fruit === "🍏") {
        appleShelf.textContent += fruit;
    } else if (fruit === "🍊") {
        orangeShelf.textContent += fruit;
    } else if (fruit === "🍌") {
        bananaShelf.textContent += fruit;
    } else {
        console.log("This goes in the bin!");
    }
}