let addBookButton = document.getElementById('submit-book-button')
let bookTitle = document.getElementById('book-title')
let bookAuthor = document.getElementById('book-author')
let bookPages = document.getElementById('book-pages')
let bookRead = document.getElementById('book-read')
let testInput = document.getElementById('test-input')


addBookButton.addEventListener('click', function() {
    console.log(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    let z = document.createElement('p')
    z.innerText = bookTitle.value
    testInput.appendChild(z)
})



class Book {
    constructor(title, author, pages, read) {
        this.title = bookTitle.value
    }
    cons
    
}