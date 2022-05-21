const addBookButton = document.getElementById('submit-book-button')
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')
let testInput = document.getElementById('test-input')
let bookShelf = []
let bookcount = 0


addBookButton.addEventListener('click', function() {
    console.log(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked)
    let z = document.createElement('p')
    z.innerText = bookTitle.value
    createBook(bookcount, bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked, `#${Math.floor(Math.random()*16777215).toString(16)}`)

})

function createBook(bookcount, title, author, pages, read, backgroundcolor) {
    bookcount += 1
    bookShelf.push(new Book(bookcount, title, author, pages, read, backgroundcolor))
    renderBooks()
}

function renderBooks() {
    testInput.innerHTML = '';
    for(let book of bookShelf) {
        let author = document.createElement('p')
        author.innerText = book.author
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(book.backgroundcolor)
        author.style.backgroundColor = book.backgroundcolor
        testInput.appendChild(author)
    }

}


class Book {
    constructor(bookcount, title, author, pages, read, backgroundcolor) {
        this.bookcount =  bookcount
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.backgroundcolor = backgroundcolor
    }
    
}