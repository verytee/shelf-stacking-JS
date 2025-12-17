fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"]; 

const shelf = { 
    "🍌": "",
    "🍊": "",
    "🍏": ""
};

const whichShelf = {
    "🍌": "#banana-shelf",
    "🍊": "#orange-shelf",
    "🍏": "#apple-shelf"
};

for (const fruit of fruits) {
    if (shelf.hasOwnProperty(fruit)) {
        shelf[fruit] += fruit;
    } else {
        console.log(`${fruit} goes in the bin 🗑️`);
    }
}

for (const [emoji, selector] of Object.entries(whichShelf)) {
    document.querySelector(selector).textContent = shelf[emoji];
}
