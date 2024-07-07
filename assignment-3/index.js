function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function resetDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('X', '*'));
    } catch (error) {
        display.value = 'Error';
    }
}
