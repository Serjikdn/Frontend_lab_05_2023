const button = document.querySelector('button');

function changePosition(){
    button.style.top = Math.floor(Math.random() * ((350 - button.offsetHeight) - 10) + 10) + "px";
    button.style.left = Math.floor(Math.random() * ((350 - button.offsetWidth) - 10) + 10) + "px";
}

button.addEventListener('mouseenter', changePosition);