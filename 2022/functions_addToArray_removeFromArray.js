// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {
  let arr  = [...bookList];
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  let arr = [...bookList];
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}

var newBookList = add('A Brief History of Time');
console.log (newBookList)
console.log(bookList);
var newerBookList = remove('On The Electrodynamics of Moving Bodies');
console.log (newerBookList)
console.log(bookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');