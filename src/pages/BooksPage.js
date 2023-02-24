import React from "react";
import Book from "../components/Book";
import Form from "../components/Form";

function BooksPage() {
  const books = [
    {
      id: "b1",
      title: "The Hunger Gane",
      author: "Suzanne Collins",
      category: "action",
    },
    {
      id: "b2",
      title: "Dune",
      author: "Frank Herbert",
      category: "science-fiction",
    },
    {
      id: "b3",
      title: "Capital in the 21st Century",
      author: "Suzanne Collins",
      category: "economy",
    },
  ];
  return (
    <div>
      <div className="books-list-container row">
        <ul className="books-list">
          {books.map((bk) => (
            <Book key={bk.id} title={bk.title} author={bk.author} id={bk.id} />
          ))}
        </ul>
      </div>
      <Form />
    </div>
  );
}

export default BooksPage;
