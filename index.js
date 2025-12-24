// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = input ? `You typed: ${input}` : 'Your input will be displayed here.';
}

// Combine Multiple Events

// Function that integrates multiple event types for dynamic interactions
function handleDynamicInteraction(event) {
  const input = document.getElementById('textInput').value;
  if (event.key === 'Enter' && input) {
    document.body.style.backgroundColor = input.startsWith('#') ? input : '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('keyPressDisplay').textContent = `Color changed with: ${input}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the reset button is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  // Attach dynamic interaction listener for Enter key on text input
  document.getElementById('textInput').addEventListener('keydown', handleDynamicInteraction)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  handleDynamicInteraction,
  setupEventListeners,
}