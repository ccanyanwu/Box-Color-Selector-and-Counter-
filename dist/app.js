"use strict";
//select elements from the DOM
const BOX = document.getElementById("color-box"), SELECTEDCOLOR = document.getElementById("color-picker"), INCREMENTBTN = document.getElementById("increment"), DECREMENTBTN = document.getElementById("decrement"), H3 = document.getElementById("counter"), SUMMARY = document.getElementById("summary"), SUMMARYBUTTON = document.querySelector("[type = button]");
let counter = 0, color = 'black';
//event for color change
SELECTEDCOLOR === null || SELECTEDCOLOR === void 0 ? void 0 : SELECTEDCOLOR.addEventListener("change", () => {
    color = SELECTEDCOLOR.value;
    BOX.style.backgroundColor = color;
});
//increment function handler
INCREMENTBTN.addEventListener("click", () => {
    counter++;
    H3.innerText = `${counter}`;
});
//decrement function handler
DECREMENTBTN.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        alert("counter cannot be less than 0");
        counter = 0;
    }
    else {
        H3.innerText = `${counter}`;
    }
});
//summary handler
SUMMARYBUTTON.addEventListener("click", () => {
    if (counter == 0) {
        SUMMARY.innerText = `There are no  boxes`;
    }
    else if (counter == 1) {
        SUMMARY.innerText = `There is only 1 ${color} box`;
    }
    else {
        SUMMARY.innerText = `There are ${counter} ${color} boxes`;
    }
});
