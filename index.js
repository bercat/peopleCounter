

// 1. intialize the count as 0
let count = 0;

//2.grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")

// 3. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

//onclick attribute fires up increment() on a mouse click
function increment() {
    
    // 4. increase the number by 1, can use +=
    count = count + 1; 

    //5. change the count-el in the HTML when the button is clicked
    countEl.textContent = count;
} 

// 6. Create a function, save(), 
//which logs out the count when it's called
function save() {

    console.log("Previous saving: " + count + "-")

// 2. Create a variable that contains both the 
//count and the dash separator, i.e. "12 - "
let countStr = count + " - "; 

// 3. Render the variable in the saveEl using innerText
saveEl.textContent += countStr  

console.log(saveEl)
console.log(count)

setBack()

}


function setBack() {
    count = 0;
    countEl.textContent = count;
}

