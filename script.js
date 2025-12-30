const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Replace symbols to match JS
    let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Support keyboard input
document.addEventListener('keydown', function (e) {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
