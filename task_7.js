const area = document.querySelector('#area');
let move = false;
let offsetX, offsetY;
let currentBlock;


area.addEventListener('mousedown', (e) => {
        if (e.target === area) {
            move = false; // Заборонити переміщення, якщо натиснуто сам елемент area
            return;
        }
        move = true;
        currentBlock = e.target;
        const blockRect = currentBlock.getBoundingClientRect();
        offsetX = e.clientX - blockRect.left;
        offsetY = e.clientY - blockRect.top;
    }
);

document.addEventListener('mousemove', (e) => {
    if (move && currentBlock) {
        const areaRect = area.getBoundingClientRect();

        const newX = e.clientX - offsetX - areaRect.left;
        const newY = e.clientY - offsetY - areaRect.top;
        const blockRect = currentBlock.getBoundingClientRect();
        if (newX >= 0 && newX <= areaRect.width - blockRect.width - 2) {
            currentBlock.style.left = newX + 'px';
        }

        if (newY >= 0 && newY <= areaRect.height - blockRect.height - 2) {
            currentBlock.style.top = newY + 'px';
        }
    }
});

document.addEventListener('mouseup', () => {
    move = false;
    currentBlock = null;
});

