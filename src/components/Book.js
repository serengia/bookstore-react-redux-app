import React from "react";
import { useDispatch } from "react-redux";
import { booksActions, deleteBook } from "../redux/books/booksSlice";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar/ProgressBar";

function Book(props) {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const removeBookHandler = (e) => {
    // Dispatch remove book action
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-details">
        <h2 className="title">{title}</h2>
        <span className="by">By {author}</span>
        <div className="buttons-wrapper">
          <button type="button" data-id={id} onClick={removeBookHandler}>
            Remove
          </button>
          <button type="button" data-id={id}>
            Edit
          </button>
        </div>
      </div>
      <div className="completion-status">
        <div style={{ width: 60, height: 60 }}>
          <ProgressBar value={60} />
        </div>
        <div className="completion-data">
          <span className="percentage">64%</span>
          <span className="status">Completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className="title">Current Chapter</span>
        <h4 className="chapter-text">Chapter 17</h4>
        <button type="button" className="progress-btn">
          Update progress
        </button>
      </div>
    </div>
  );
}

export default Book;
