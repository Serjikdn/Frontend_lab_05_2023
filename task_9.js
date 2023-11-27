const books = document.querySelectorAll('#bookList li');

books.forEach((book)=>{
    book.addEventListener('click', ()=>{
        books.forEach(elem => elem.classList.remove('selected'));
        book.classList.add('selected');
    })
})