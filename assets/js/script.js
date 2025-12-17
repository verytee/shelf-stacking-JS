fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"]; 

for (const fruit of fruits) { 
    if (fruit === "🍌") { 
        document.querySelector("#banana-shelf").textContent += fruit; 
    } 
        else if (fruit === "🍊") { 
            document.querySelector("#orange-shelf").textContent += fruit; 
        } 
        else if (fruit === "🍏") { 
            document.querySelector("#apple-shelf").textContent += fruit; 
        } 
            else { console.log(`${fruit} goes in the bin 🗑️`); 
        } }