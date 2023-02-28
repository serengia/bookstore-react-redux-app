import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book";
import { getBooks } from "../redux/books/booksSlice";
import "./CategoriesPage.scss";

function CategoriesPage() {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <div className="categories-wrapper row">
        <div className="header">
          <div className="header-buttons">
            <button type="button" className="active">
              All categories
            </button>
            <button type="button">Check status</button>
            <button type="button">Check status</button>
          </div>
        </div>
        <div className="books">
          {books.map((bk) => (
            <Book
              key={bk.item_id}
              title={bk.title}
              author={bk.author}
              id={bk.item_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
