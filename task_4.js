const commentBlock = document.querySelector('#comments');
const commentList = [
    'Ann has a very big bag. Her bag is red and thick. Ann has five books, three copybooks, a pencil case and a big apple in her bag.',
    'The apple is big and green. Two pens and pencils are in the pencil case. The pencil case is white.',
    'Luke and Amy are at the zoo. They watch a sea lion show. The sea lion can clap to music. It can’t sing very well so Luke covers his ears.'
];

function addBlockComment(text) {
    const div = document.createElement('div');
    div.classList.add('block');
    const buttonClose = document.createElement('img');
    buttonClose.src = 'images/close.jpg';
    buttonClose.classList.add('but', 'close');
    const buttonEdit = document.createElement('img');
    buttonEdit.src = 'images/edit.jpg';
    buttonEdit.classList.add('but', 'edit');
    const textArea = document.createElement('div');
    const comment = document.createElement('p');
    comment.textContent = text;
    comment.classList.add('textBlock');
    textArea.append(comment);
    div.append(buttonClose, buttonEdit, textArea);
    commentBlock.append(div);
}

function delBlock(block) {
    let parentBlock = block.parentNode;
    parentBlock.parentNode.removeChild(parentBlock);
}

function selectedBlock(element, index) {
    const edit = document.querySelectorAll('.edit');
    edit.forEach((e, i)=> {
        if (e.classList.contains('select')){
            deselected(e, i);
        }
    });
    element.classList.toggle('select');
    const block = element.parentNode;
    const content = block.querySelector('div');
    const textArea = document.createElement('textarea');
    textArea.classList.add('textBlock');
    textArea.style.resize = 'none';
    textArea.value = commentList[index];
    textArea.addEventListener('blur', () => {
        deselected(element, index);
    });
    content.textContent = '';
    content.append(textArea);
    textArea.focus();
}

function deselected(element, index) {
    element.classList.remove('select');
    const block = element.parentNode;
    const content = block.querySelector('div');
    const textArea = block.querySelector('textarea');
    const p = document.createElement('p');
    commentList[index] = textArea.value;
    p.textContent = commentList[index];
    content.textContent = '';
    content.append(p);
}

function refresh(list) {

    commentBlock.textContent = '';
    list.forEach((e) => {
        addBlockComment(e);
    });
    const close = document.querySelectorAll('.close');
    const edit = document.querySelectorAll('.edit');
    edit.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (!element.classList.contains('select')) {
                selectedBlock(element, index);
            } else {
                deselected(element, index)
            }
        });
    });

    close.forEach((element) => {
        element.addEventListener('click', () => {
            delBlock(element);
        });
    })
}


refresh(commentList);

