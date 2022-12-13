function Book(name, author, pageCount, read) {
  this.name = name;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = function () {
    console.log(
      `${name} by ${author}, ${pageCount} pages, ${
        read === true ? "has been read." : "not read yet."
      }`
    );
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", true);
console.log(theHobbit.info());
