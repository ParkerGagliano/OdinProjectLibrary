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
    createBook(bookcount, bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked)

})

function createBook(bookcount, title, author, pages, read) {
    bookcount += 1
    bookShelf.push(new Book(bookcount, title, author, pages, read))
    renderBooks()
}

function renderBooks() {
    for(let book of bookShelf) {
        let author = document.createElement('p')
        author.innerText = book.author
        testInput.appendChild(author)
    }

}


class Book {
    constructor(bookcount, title, author, pages, read) {
        this.bookcount =  bookcount
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    
}