const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector('#clearHistoryButton');


colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorPreview.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
});

// Function to add the selected color to the history
function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    li.style.listStyle = 'none';
    li.style.cursor = 'pointer';
    colorHistory.appendChild(li);
}


colorHistory.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        const selectedColor = event.target.textContent;
        colorPreview.style.backgroundColor = selectedColor;
    }
});


clearHistoryButton.addEventListener('click', () => {
    colorHistory.innerHTML = '';
    // colorPreview.style.backgroundColor = ''; 
    colorPicker.value = ''; 
});





