let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }else {
        alert('Please fill in all the fields correctly.');
    }
}

function showBooks() {
    const booksdiv = books.map((book, index) => '<h1>Book Number: ' + (index + 1) + '</h1>' + 
    '<p><strong>Book Name: </strong>' + book.bookName +'</p>' +
    '<p><strong>Author Name: </strong>' + book.authorName +'</p>' +
    '<p><strong>Book Description: </strong>' + book.bookDescription +'</p>' +
    '<p><strong>Number of Pages: </strong>' + book.pagesNumber +'</p>'
    );

    document.getElementById('books').innerHTML = booksdiv.join('');

}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}