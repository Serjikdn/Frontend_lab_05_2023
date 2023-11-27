const but = document.querySelector('button');
const name = document.querySelector('#name');
const comment = document.querySelector('#comment');
const comments = document.querySelector('#comments');

function addComment(name, text) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const trHeader = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = name;
    const tdDate = document.createElement('td');
    let now = new Date();
    tdDate.textContent = now.toDateString() + " " + now.getHours() + ":" + now.getMinutes();
    const trComment = document.createElement('tr');
    const tdComment = document.createElement('td');
    trHeader.append(tdName, tdDate);
    tdComment.textContent = text;
    tdComment.colSpan = 2;
    trComment.append(tdComment);
    tbody.append(trHeader, trComment);
    table.append(tbody);
    comments.append(table);
}

but.addEventListener('click', () => {
    if (name.value && comment.value){
        addComment(name.value, comment.value);
        name.value = '';
        comment.value = '';
    }
});