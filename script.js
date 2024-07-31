const books = document.querySelector(".books");
const newBookBtn = document.querySelector(".add-book");
const bookForm = document.querySelector(".book-form");

// my library
const myLibrary = [
    {title:"Nate the Great",author:"Marjorie W. Sharmat",pages:225},
    {title:"One Piece",author:"Eiichiro Oda",pages:1000},
];

// constructor for the book
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

}

// adding books to the library
function addBookToLibrary(book) {
    myLibrary.push(book)
    displayBooks();
}

// display all the books
function displayBooks(){
    books.innerHTML = '';
    myLibrary.forEach((book, index) =>{
        const singleBook = document.createElement('div');
        singleBook.classList.add('book');
        singleBook.dataset.id = index;
        singleBook.innerHTML = `<h2>${book.title}</h2><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p> <button data-index=${index} class="remove-book">Remove</button>`;
        books.appendChild(singleBook);
    })

    // Attach event listeners to remove buttons
    document.querySelectorAll('.remove-book').forEach(button => {
    button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        removeBook(index);
    });
});
}

// display all the books
displayBooks();

// display the form
newBookBtn.addEventListener('click', ()=>{
    bookForm.style.display = "block";
})

// get the information from the form and adding to the library
bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Get the form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title,author,pages);

    addBookToLibrary(newBook);

    bookForm.style.display = "none";


    bookForm.reset();
})

// remove book by index
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}


