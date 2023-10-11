const container = document.querySelector('.container');


const myLibrary = [
    new Book('David Goggin', 'Cant hurt me', 345, true),
    new Book('Jordan Pietersen','12 rule of life', 341, false ),
    new Book('Benjamin Graham', 'Intelligent Invenstor', 700, true)

];

myLibrary.splice(1, 1);
let bookDetail = '';
myLibrary.forEach((book,index) => {
    bookDetail += `<p> ${book.author} - ${book.title} - ${book.pages}- ${book.read} - ${index}</p>
    <button data-key = ${index}>Delete</button>
    `
})

container.innerHTML = bookDetail;
var btns  = document.querySelectorAll('button');

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (e)=> {
        console.log(e.dataset.key);
    })
})



function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}