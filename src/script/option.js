
document.addEventListener('DOMContentLoaded', function() {
    const apiButton = document.getElementById('apiButton');
    const inputText = document.getElementById('inputText');

    const API = localStorage.getItem('cleAPI');
    if (API) {
        inputText.value = API;
        apiButton.textContent = "Update";
    }

    apiButton.addEventListener('click', function() {
        const API = inputText.value;
        localStorage.setItem('cleAPI', API);
        window.location.href = 'popup.html';
    });
});