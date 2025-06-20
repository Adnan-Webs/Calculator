// Appends the specified character to the display
function append(x) {
  document.getElementById("display").value += x;
}

// Clears the display by setting its value to an empty string
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculates the result of the mathematical expression in the display
function calculate() {
  try {
    var result = document.getElementById("display").value; // Get the current expression
    result = eval(result); // Evaluate the expression
    document.getElementById("display").value = result; // Update the display with the result
  } catch (e) {
    document.getElementById("display").value = "error"; // Show "error" if evaluation fails
  }
}

// Removes the last character from the display
function backspace() {
  var display = document.getElementById("display").value; // Get the current value of the display
  document.getElementById("display").value = display.slice(0, -1); // Remove the last character
}
