import React from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book";
import Form from "../components/Form";

function BooksPage() {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      <div className="books-list-container row">
        <ul className="books-list">
          {books.map((bk) => (
            <Book
              key={bk.item_id}
              title={bk.title}
              author={bk.author}
              id={bk.item_id}
            />
          ))}
        </ul>
      </div>
      <Form />
    </div>
  );
}

export default BooksPage;
