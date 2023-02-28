import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { booksActions } from "../redux/books/booksSlice";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // submit data
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
    };

    // Adding book to state
    dispatch(booksActions.addBook(bookData));

    // Empty form inputs
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="form-wrapper row">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={title}
          aria-label="Book title input"
          placeholder="Book Title"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          name="author"
          value={author}
          aria-label="Book author input"
          placeholder="Author"
          onChange={authorChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
