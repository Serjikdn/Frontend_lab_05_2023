const desk = document.querySelector('#cards');
const cards = ['8.png', '9.png', '10.png', 'q.png', 't.png'];
const backCard = 'back.jpg';

function addCard(card){
    const div = document.createElement('div');
    div.classList.add('card');
    div.addEventListener('click', (e)=> {
        flipCard(e.target.parentNode);
    });
    const backImg = document.createElement('img');
    backImg.src = 'images/' + backCard;
    backImg.classList.add('back');
    const frontImg = document.createElement('img');
    frontImg.src = 'images/' + card;
    frontImg.classList.add('front');
    div.append(backImg, frontImg);
    desk.append(div);
}

function flipCard(card) {
    card.classList.toggle('flipped'); // Додати або видалити клас flipped
}

function test(card){
    console.log(card);
}
cards.forEach((e)=>addCard(e));