// Cache DOM elements for performance
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const resetButton = document.querySelector("#reset");
const outputSpan = document.querySelector("#output");

// Constants for counter limits
const MAX_COUNT = 1000;
const MIN_COUNT = 0;

// State
let count = 0;

// Function to update the display
const updateDisplay = () => {
  outputSpan.innerText = count;
};

// Event Listeners
addButton.addEventListener("click", () => {
  count++;
  if (count > MAX_COUNT) {
    count = MIN_COUNT;
  }
  updateDisplay();
});

subtractButton.addEventListener("click", () => {
  count--;
  if (count < MIN_COUNT) {
    count = MAX_COUNT;
  }
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  count = MIN_COUNT;
  updateDisplay();
});

// Initial display update
updateDisplay();
