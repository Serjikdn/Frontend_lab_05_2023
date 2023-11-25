const colorBoxes = document.querySelectorAll('#colors td')
const board = document.querySelectorAll('#board td');

let selectedColor = null;

colorBoxes.forEach((colorBox) => {
    colorBox.addEventListener('click', (e) => {
        colorBoxes.forEach((elem)=> elem.classList.remove('selected'));
        selectedColor = window.getComputedStyle(colorBox).backgroundColor.toString();
        colorBox.classList.add('selected');
    });
});

board.forEach((cell) => {
    cell.addEventListener('click', (e)=>e.target.style.backgroundColor = selectedColor)
})
