const myLibrary = []
const bookList = document.querySelector('#bookList')

addBookToMyLibrary("Brave New World", "Aldous Huxley", "311")
addBookToMyLibrary("Nineteen Eighty-Four", "George Orwell", "328")
addBookToMyLibrary("A Tale of Two Cities", "Charles Dickens", "448")
appendToDomLibrary(myLibrary)


// Object Constructor Function
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = "Unread"
    this.remove = "Remove"
}

// It is better to create a function in the prototype of an object. That way the function
// is not recreated in all instances of the object, which matters if you have many instances
Book.prototype.info = function () {
    return [this.title, this.author, this.pages, this.read]
}

// Create new book object instance from the object constructor function and push it to myLibrary
function addBookToMyLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

// Remove all children elements from param node
function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) { parentNode.removeChild(parentNode.firstChild) }
}

// Append input library type of array containing objects to DOM Library
function appendToDomLibrary(lib) {
    // Loop through the array of book objects in param library
    for (let i = 0; i < lib.length; i++) {
        const li = document.createElement('li')
        // Loop through book object, assign element type, text, attributes and append to DOM
        for (const [key, val] of Object.entries(lib[i])) {
            let element = document.createElement('span')
            if (key == "read" || key == "remove") { element = document.createElement('button') }
            element.textContent = `${val}`;
            element.setAttribute("class", `${key}`);
            li.appendChild(element)
        }
        bookList.appendChild(li)
    }
}

// const removeBtns = document.querySelectorAll(".remove")

const addBtn = document.querySelector(".addBtn")
const addForm = document.forms["add-book-form"]


// Assign addBook & removeBook functionality to all buttons
// removeBtns.forEach(btn => btn.addEventListener('click', removeBook));


// Add Remove book button functionality to the ul #bookList tag, accessible through event bubbling
bookList.addEventListener("click", function (e) {
    if (e.target.className == 'remove') {
        console.log(e.target)
        bookList.removeChild(e.target.parentNode)
    }
})


addForm.addEventListener("submit", function (e) {
    e.preventDefault()

})

// function addBook(e) {
//     e.preventDefault()
//     console.log(e.target)
//     console.log(e)
//     console.log("hello")
// }