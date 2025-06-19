function setDarkMode() {
    document.body.setAttribute('data-bs-theme', 'dark');
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
}

function setLightMode() {
    document.body.setAttribute('data-bs-theme', 'light');
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = '#000';
}

document.getElementById('calcBtn').addEventListener('click', function () {
    const input = document.getElementById('numInput').value;
    const resultDiv = document.getElementById('resultScreen');
    const number = parseFloat(input);

    if (!isNaN(number)) {
        resultDiv.innerHTML = `${number} squared is ${number * number}`;
    }
});
