document.addEventListener("DOMContentLoaded", () => {

    var textField = document.getElementById("textinput");
    var upperCheck = document.getElementById("uppercase");
    var lowerCheck = document.getElementById("lowcase");

    upperCheck.addEventListener('click', () => {
        textField.value = textField.value.toUpperCase();
        lowerCheck.checked = false;
    });
    lowerCheck.addEventListener('click', () => {
        textField.value = textField.value.toLowerCase();
        upperCheck.checked = false;
    });
});