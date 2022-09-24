function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json()) //the built-in json method returns the response as a POJO(plain old JavaScript object) and it is another promise
    .then(booksData => renderBooks(booksData)); //pass the returned object to the renderBooks function
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//on page load
//listen to events after the HTML and CSS have parsed
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
