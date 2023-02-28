import React from "react";
import { useDispatch } from "react-redux";
import { booksActions } from "../redux/books/booksSlice";

function Book(props) {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const removeBookHandler = (e) => {
    // Dispatch remove book action
    const { id } = e.target.dataset;

    dispatch(booksActions.removeBook(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <span>By{author}</span>
      <button type="button" data-id={id} onClick={removeBookHandler}>
        Remove
      </button>
    </div>
  );
}

export default Book;
