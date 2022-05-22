const addBookButton = document.getElementById('submit-book-button')
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')
let testInput = document.getElementById('test-input')
const modalContainer = document.getElementById('modal-container')
const modalClose = document.getElementById('close-modal')
let joemama
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
        let readMark = document.createElement('p')
        let bookpreview = document.createElement('div')
        readMark.innerText = '✓'
        bookpreview.style.backgroundColor = book.backgroundcolor
        bookpreview.classList.add('book-preview-container')
        abvs = createAbrev(book.title, book.author)
        author.innerText = abvs[0]
        author.classList.add('book-preview')
        readMark.classList.add('book-preview')
        bookpreview.appendChild(author)
        if (book.read) {
            bookpreview.appendChild(readMark)
        }
        testInput.appendChild(bookpreview)

        bookpreview.addEventListener('click', function() {
            modalContainer.classList.add('show')
            modalContainer.appendChild(document.createElement('p').innerText=book.title)
        })
        modalClose.addEventListener('click', function() {
            console.log('joe')
            modalContainer.classList.remove('show')
        })
    }
}


function createAbrev(title, author) {
    titleAbv = title.match(/\b(\w)/g).join('');
    authorAbv = author.match(/\b(\w)/g).join('');
    return [titleAbv, authorAbv]

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




joemama.addEventListener('click', function() {
    testInput.innerHTML = ''
})