const app = document.getElementById('app');

// Generate and inject the HTML content
app.innerHTML = `
  <main class="container">
      <h1>JavaScript Counter</h1>
      <div class="counter_container">
        <button id="subtract" aria-label="Decrement"><i class="fas fa-minus"></i></button>
        <span id="output">0</span>
        <button id="add" aria-label="Increment"><i class="fas fa-plus"></i></button>
      </div>
      <button id="reset" aria-label="Reset"><i class="fas fa-sync-alt"></i> Reset</button>
  </main>
`;

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
