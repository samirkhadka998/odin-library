const main = document.querySelector('main');
const form = document.querySelector('form');
let message = document.getElementById('message');

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}
// form.hidden = true;

const myLibrary = [
    new Book('David Goggin', 'Cant hurt me', 345, true),
    new Book('Jordan Pietersen', '12 rule of life', 341, false),
    new Book('Benjamin Graham', 'Intelligent Invenstor', 700, true),
    new Book('Benjamin Graham', 'Intelligent Invenstor', 700, true),
    new Book('Benjamin Graham', 'Intelligent Invenstor', 700, true)

];

loadBookAndReadEvent();

function loadBook() {
    let bookDetail = '';
    myLibrary.forEach((book, index) => {
        bookDetail += `<article class="${index} article">
        
        <div class ="image-info">
        <span>${book.title[0]}</span>
        </div>
        <h1>${book.title} </h1>
        <h2> ${book.author}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem iste cupiditate quam architecto
            officia id libero. Amet nihil facilis accusantium voluptate commodi?</p>
        <section>
            <p>Pages : ${book.pages}</p>
            <p>Read : ${book.read}</p>
        </section>

        <button class="${index} deletebtn" data-key=${index}>Delete</button>
    </article>`
    })

    main.innerHTML = bookDetail;
    enableDeleteBtns();

}


function enableDeleteBtns() {
    var deleteBtns = document.querySelectorAll('.deletebtn');

    Array.from(deleteBtns).forEach(btn => {
        btn.addEventListener('click', deleteBook);
    })
}


function enableToggleRead() {
    var articles = document.querySelectorAll('.article');

    Array.from(articles).forEach(btn => {
        btn.addEventListener('dblclick', toggleRead);
    })

}

var submitbtn = document.querySelector('#submit');
submitbtn.addEventListener('click', addBookToLibrary);


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#create");
const closeButton = document.querySelector("#close");

showButton.addEventListener("click", () => {
    message.innerHTML = '';
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});





function addBookToLibrary() {
    if (!validateForm()) {
        return;
    }
    form.read.value = form.read.checked ? true : false;
    myLibrary.push(new Book(form.author.value, form.title.value,
        form.pages.value, form.read.value));
    form.reset();
    dialog.close();
    loadBookAndReadEvent();
    return false;
}

function deleteBook(e) {
    let index = e.target.dataset.key;
    myLibrary.splice(index, 1);
    loadBookAndReadEvent();
}

function toggleRead(e) {
    let index = e.currentTarget.classList[0];
    myLibrary[index].read = !myLibrary[index].read;
    loadBookAndReadEvent();
}


function loadBookAndReadEvent() {
    loadBook();
    enableToggleRead();
}



function ErrorMessage(value, name) {
    this.value = value,
        this.name = name;
}

ErrorMessage.prototype.returnObj = function () {
    return { value: this.value, name: this.name }
}
function validateForm() {
    // myLibrary.push(new Book(form.author.value, form.title.value,
    //     form.pages.value, form.read.value));
    let inputs = [];
    let author = new ErrorMessage(form.author.value, 'Author');
    inputs.push(author.returnObj())
    let title = new ErrorMessage(form.title.value, 'Title');
    inputs.push(title.returnObj())
    let pages = new ErrorMessage(form.pages.value, 'Pages');
    inputs.push(pages.returnObj())

    let messageText = '';
    inputs.forEach(item => {
        if (!item.value) {
            messageText += `<p>*${item.name} is required.</p>`
        }
    })
    if (messageText) {
        message.innerHTML = messageText;
        return false;
    }

    return true;
}