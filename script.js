function append(x) {
  document.getElementById("display").value += x;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    var result = document.getElementById("display").value;

    result = eval(result);

    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "error";
  }
}

function backspace() {
  var display = document.getElementById("display").value;
  document.getElementById("display").value = display.slice(0, -1);
}

function lightMode() {
  const body = document.body;
  const bgColor = window.getComputedStyle(body).backgroundColor;
  if (bgColor === "rgb(255, 255, 255)") {
    return;
  }
  body.style.backgroundColor = "white";
}

function darkMode() {
  const body = document.body;
  const bgColor = window.getComputedStyle(body).backgroundColor;
  if (bgColor === "rgb(0, 0, 0)") {
    return;
  }
  body.style.backgroundColor = "black";
}
