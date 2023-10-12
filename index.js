const main = document.querySelector('main');
const form = document.querySelector('form');

form.hidden = true;

const myLibrary = [
    new Book('David Goggin', 'Cant hurt me', 345, true),
    new Book('Jordan Pietersen', '12 rule of life', 341, false),
    new Book('Benjamin Graham', 'Intelligent Invenstor', 700, true)
    
];

// loadBook();

function loadBook() {
    let bookDetail = '';
    myLibrary.forEach((book, index) => {
        bookDetail += `<p> ${book.author} - ${book.title} - ${book.pages}- ${book.read} - ${index}</p>
    <button class ="${index} librarybtn" data-key = ${index}>Delete</button>
    `
    })

    main.innerHTML = bookDetail;

}

var create = document.querySelector('#create');
create.addEventListener('click' ,toggleForm )

var btns = document.querySelectorAll('.librarybtn');

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.dataset);
    })
})

var submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', addBookToLibrary);




function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    console.log(form.read)
    form.read.value = form.read.checked ? true :false;
    myLibrary.push(new Book(form.author.value, form.title.value, 
        form.pages.value, form.read.value));
    form.reset();
    loadBook();
    toggleForm();
    return false;
    // do stuff here
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    loadBook();
}

function toggleForm() {
    if(form.hidden){
        form.hidden = false;
    } 
    else{
        form.hidden = true;
    }
}