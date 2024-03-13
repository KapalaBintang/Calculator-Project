let display = document.getElementById("display");
let currentDisplay = 0;

function appendToDisplay(value) {
  if (display.innerHTML === "0") display.innerHTML = value;
  else {
    display.innerHTML += value;
  }
}

function clearDisplay() {
  display.innerHTML = "0";
}

function clearLastElement() {
  let length = display.innerHTML.split("");
  length.pop(); // removing the last element
  display.innerHTML = length.join(""); //Join it back and display it

  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
}

function calculateResult() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch {
    display.innerHTML = "\nError";
  }
}
