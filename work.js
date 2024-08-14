let num=0;
let currentValue = 0;
const maxValue = 100;

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = Math.min(Math.max((currentValue / maxValue) * 100, 0), 100);
    progressFill.style.width = percentage + '%';
}

function changeValue(amount) {
    currentValue += amount;
    if (currentValue > maxValue) currentValue = maxValue;
    if (currentValue < 0) currentValue = 0;
    updateProgressBar();
}

updateProgressBar();


