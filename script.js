function append(x) {
  document.getElementById("display").value += x;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "error";
  }
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById("themeToggle");
  const bgColor = window.getComputedStyle(body).backgroundColor;

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }

  if(body.classList.contains("dark-mode")){
    body.style.backgroundColor = "rgb(41, 45, 46)";
  } else {
    body.style.backgroundColor = "rgb(175, 226, 236)";
  }

  

}
