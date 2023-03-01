import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { booksActions, postBook } from "../redux/books/booksSlice";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // submit data
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    // Adding book to state
    dispatch(booksActions.addBook(bookData));
    dispatch(postBook(bookData));

    // Empty form inputs
    setTitle("");
    setAuthor("");
    setCategory("");
  };
  return (
    <div className="form-wrapper row">
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          name="title"
          value={title}
          aria-label="Book title input"
          placeholder="Book Title"
          className="title-input"
          required
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          name="author"
          value={author}
          aria-label="Book author input"
          placeholder="Author"
          className="author-input"
          required
          onChange={authorChangeHandler}
        />
        <select
          name="category"
          id="category"
          className="category-input"
          onChange={categoryChangeHandler}
          aria-label="Book category input"
          required
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Technology">Technology</option>
          <option value="Life-style">Life-style</option>
          <option value="Economy">Economy</option>
          <option value="Politics">Politics</option>
          <option value="General">General</option>
        </select>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
