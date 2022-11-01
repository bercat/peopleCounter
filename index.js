
let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count = count + 1; 
    countEl.textContent = count;
} 

function save() {

    let countStr = count + " - "; 

    saveEl.textContent += countStr;  

    setBack()

}

function setBack() {
    count = 0;
    countEl.textContent = count;
}

