const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function deleteBtn() {
  try {
    display.value = display.value.slice(0, -1);
  } catch (error) {
    display.value = "Error";
  }
}
