const colors = document.querySelectorAll('td');
const paint = document.querySelector('.paint');

let selectColors = [];

function addColor(color) {
    if (selectColors.includes(color)) {
        selectColors = selectColors.filter((e) => e !== color);
    } else {
        selectColors.push(color);
    }
    console.log(selectColors);
    showColor();
}

function showColor(){
    if (selectColors.length > 1){
        paint.style.background = `linear-gradient(${selectColors})`;
    } else if (selectColors.length === 1){
        paint.style.backgroundColor = `${selectColors}`;
    } else {
        paint.style.background = '';
    }
}

colors.forEach((element) => {
    element.addEventListener('click', () => {
        addColor(window.getComputedStyle(element).backgroundColor.toString());
        element.classList.toggle('selected');
    })
});