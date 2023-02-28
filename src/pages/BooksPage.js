import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Book from "../components/Book";
import Form from "../components/Form";
import { getBooks } from "../redux/books/booksSlice";

function BooksPage() {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h3>Loading...</h3>;

  if (books?.length > 0) {
    output = books.map((bk) => (
      <Book
        key={bk.item_id}
        title={bk.title}
        author={bk.author}
        id={bk.item_id}
      />
    ));
  }

  if (!isLoading && books?.length === 0) {
    output = <h3>No books to display...</h3>;
  }

  return (
    <div>
      <div className="books-list-container row">
        <ul className="books-list">{output}</ul>
      </div>
      <Form />
    </div>
  );
}

export default BooksPage;
