let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBooks = (req, res)=>{
    res.status(200).json(books);
};

const addBook = ( req, res)=>{
    const book = req.body;
    books.id = books[books.length - 1].id + 1;
    books.push(book);
    res.status(201).json({message:"Book added successfully", success:true});
}

const updateBook = ( req, res )=>{
    let bookId = req.params.id;
    let UpdateData = req.body;

    let bookInx = books.findIndex((ele) => ele.id == parseInt(bookId));

    if(bookInx > -1){
        let objBook = { ...books[bookInx]}
        objBook={
            ...objBook,
            ...UpdateData
        }
        books[bookInx] = objBook;
        res.status(200).json({message:"Book updated successfully", success:true});
    }else{
        res.status(404).json({message:"Book not found", success:false});
    }



}

const deleteBook = (req, res) => {
    let bookId = req.params.id;
    let bookInx = books.findIndex((ele) => ele.id === parseInt(bookId));
  
    if(bookInx > -1){
      let booksArr = books.filter((ele, idx) => idx !== bookInx);
      books = booksArr;
      res.status(200);
      res.json({ message: "Book Deleted Successfully!", success: true });
    } else {
      res.status(404);
      res.json({ message: "Book Doesn't Exist!", success: false });
    }
  }

export { getBooks, addBook, updateBook, deleteBook };

