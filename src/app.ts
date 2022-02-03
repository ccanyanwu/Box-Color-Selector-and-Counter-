//select elements from the DOM
const BOX = document.getElementById("color-box") as HTMLInputElement,
  SELECTEDCOLOR = document.getElementById("color-picker") as HTMLInputElement,
  INCREMENTBTN = document.getElementById("increment") as HTMLButtonElement,
  DECREMENTBTN = document.getElementById("decrement") as HTMLButtonElement,
  H3 = document.getElementById("counter") as HTMLInputElement,
  SUMMARY = document.getElementById("summary") as HTMLParagraphElement,
  SUMMARYBUTTON = document.querySelector(
    "[type = button]"
  ) as HTMLButtonElement;

let counter: number = 0,
  color: string = 'black';

//event for color change
SELECTEDCOLOR?.addEventListener("change", (): void => {
  color = SELECTEDCOLOR.value;
  BOX.style.backgroundColor = color;
});

//increment function handler
INCREMENTBTN.addEventListener("click", (): void => {
  counter++;
  H3.innerText = `${counter}`;
});

//decrement function handler
DECREMENTBTN.addEventListener("click", (): void => {
  counter--;
  if (counter < 0) {
    alert("counter cannot be less than 0");
    counter = 0;
  } else {
    H3.innerText = `${counter}`;
  }
});

//summary handler
SUMMARYBUTTON.addEventListener("click", (): void => {
  if (counter == 0) {
    SUMMARY.innerText = `There are no  boxes`;
  } else if (counter == 1) {
    SUMMARY.innerText = `There is only 1 ${color} box`;
  } else {
    SUMMARY.innerText = `There are ${counter} ${color} boxes`;
  }
});
