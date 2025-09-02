const userInput = document.getElementById("userinput");
const buttons = document.querySelectorAll("button");

let currentInput = "0"; 
let resetNext = false;

function updateDisplay() {
  userInput.textContent = currentInput;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "0";
      resetNext = false;
    } 
    else if (value === "DEL") {
      if (currentInput.length === 1 || currentInput === "Error") {
        currentInput = "0";
      } else {
        currentInput = currentInput.slice(0, -1);
      }
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
      resetNext = true;
    } 
    else {
      if (resetNext && !isNaN(value)) {
        currentInput = value;
        resetNext = false;
      } else {
        if (currentInput === "0" && !isNaN(value)) {
          currentInput = value;
        } else {
          currentInput += value;
        }
      }
    }

    updateDisplay();
  });
});

updateDisplay();
