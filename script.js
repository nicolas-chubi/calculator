let totalAmount = 0;
let isSubtractMode = false; // Bandera para el modo restar

function incrementAmount(amount) {
    if (isSubtractMode) {
        decrementAmount(amount);
    } else {
        totalAmount += amount;
        document.getElementById('totalAmount').textContent = `$${totalAmount}`;
    }
}

function decrementAmount(amount) {
    totalAmount -= amount;
    if (totalAmount < 0) {
        totalAmount = 0; // Evitar que sea negativo
    }
    document.getElementById('totalAmount').textContent = `$${totalAmount}`;
}

function toggleSubtractMode() {
    isSubtractMode = !isSubtractMode;
    updateButtonColors();
}

function updateButtonColors() {
    const buttons = document.querySelectorAll('.money-button');
    buttons.forEach(button => {
        if (isSubtractMode) {
            button.style.backgroundColor = '#f8d7da'; // Color rojo claro para restar
        } else {
            button.style.backgroundColor = ''; // Volver al color normal
        }
    });
}
