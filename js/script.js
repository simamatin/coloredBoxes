let colorInput = document.getElementById('color-input');
let colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', () => {
    createColorBoxes();
});

colorInput.addEventListener('keyup', event => {
    if (event.key === "Enter") {
        createColorBoxes();
    }
});

function createColorBoxes() {
    let inputValues = colorInput.value;
    if (inputValues.trim() === '') {
        alert("Please enter some color values.");
        return;
    }
    let arr = inputValues.split(",");
    for (let i in arr) {
        let createBox = document.createElement('DIV');
        createBox.style.backgroundColor = arr[i];
        createBox.innerHTML = arr[i];
        createBox.className = 'box';
        document.getElementById("main").appendChild(createBox);
    }
    colorInput.value = '';
}