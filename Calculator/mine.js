
const display = document.getElementById('display');
const button = document.querySelectorAll('.btn');

let currentInput = ""; // Stores the current input
let operator = ""; // Stores the selected operator
let previousInput = ""; // Stores the previous input

button.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.classList.contains("operator")) {
      operator = value; // Store the operator
      previousInput = currentInput; // Save the current number as previous input
      currentInput = ""; // Reset the current input for the next number
    } else if (button.id === "equals") {
      const result = eval(`${previousInput} ${operator} ${currentInput}`);
      display.value = result; // Show the result on the screen
      currentInput = result; // Store the result as the current input
      previousInput = ""; // Reset previous input
      operator = ""; // Reset operator
    } else if (button.id === "clear") {
      // Clear everything
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "";
    } else {
      // Handle numbers and decimal
      currentInput += value;
      display.value = currentInput;
    }
  });
});

