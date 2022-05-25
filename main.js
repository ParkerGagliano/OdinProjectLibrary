const addBookButton = document.getElementById('submit-book-button')
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')
let testInput = document.getElementById('test-input')
const modalContainer = document.getElementById('modal-container')
const generateBooks = document.getElementById('generate-books')
let readMark = document.createElement('p')
readMark.innerText = '✓'
let bookShelf = []
let bookcount = 0
console.log('WHAT')
let counter = 0

const bookExamples = [["K J Alphons", 'Accelerating India: 7 Years of Modi Government', 230],["J K Rowling", "Harry Potter and the Sorcerer's Stone", 299], ["Joes Mama", 'Accelerating Joe: 2 Years of Government', 2222],["john Smith", 'Joes mama', 2]]


addBookButton.addEventListener('click', function() {
    let z = document.createElement('p')
    z.innerText = bookTitle.value
    createBook(bookcount, bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked, `#${Math.floor(Math.random()*16777215).toString(16)}`)

})

function createBook(bookcount, title, author, pages, read, backgroundcolor) {
    bookcount = bookcount + 1
    bookShelf.push(new Book(bookShelf.length, title, author, pages, read, backgroundcolor))
    renderBooks()
}

generateBooks.addEventListener('click', function() {
    autoFillBooks(bookExamples, counter)
})


function renderBooks() {
    testInput.innerHTML = '';
    for(let book of bookShelf) {
        let author = document.createElement('p')
        let readMark = document.createElement('p')
        let bookpreview = document.createElement('div')
        let modalTitle = document.createElement('p')
        let tempPara = document.createElement('p')
        tempPara.setAttribute('id', 'temp-para')
        readMark.innerText = '✓'
        readMark.setAttribute('id', `book-checkmark${book.bookcount}`)
        bookpreview.style.backgroundColor = book.backgroundcolor
        bookpreview.classList.add('book-preview-container')
        abvs = createAbrev(book.title, book.author)
        author.innerText = abvs[1]
        author.classList.add('book-preview')
        readMark.classList.add('book-preview')
        bookpreview.appendChild(author)
        if (book.read) {
            bookpreview.appendChild(readMark)
        }
        testInput.appendChild(bookpreview)
        bookpreview.addEventListener('click', function() {
            createModal([['Author: ',book.author], ['Title: ',book.title], ['Page Count: ',book.pages]], book)
            })
}



function createModal(bookinfo, book) {
    modalContainer.innerHTML = ''
    const modalClose = document.createElement('input')
    modalClose.type = ('checkbox')
    for(let i of bookinfo) {
        let tempTest = document.createElement('p')
        tempTest.innerHTML = i[0] + i[1]
        tempTest.classList.add('book-info-modal')
        modalContainer.appendChild(tempTest)
    }
    modalContainer.appendChild(modalClose)
    modalClose.addEventListener('change', function() {       
        if (this.checked) {
            book.read = true
            //bookShelf[book.bookcount].read=true
            renderBooks()
        } else {
            book.read = false
            //bookShelf[book.bookcount].read=true   Alternative option found while trying to fix other bug
            renderBooks()
        }
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



function randomElement(books) {
    return books[Math.floor(Math.random()*books.length)]
  }




function autoFillBooks(books, counter) {
    counter++
    let book = randomElement(books)
    createBook(bookcount, book[1], book[0], book[2], Math.random() > .5,`#${Math.floor(Math.random()*16777215).toString(16)}`)
    if (counter < 100) {
        setTimeout(function(){
            autoFillBooks(books,counter);
        }, 10); 
    }
}

