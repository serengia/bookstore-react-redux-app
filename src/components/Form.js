import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // submit data
    // if (!title.trim() || !author.trim()) return;
  };
  return (
    <div className="form-wrapper row">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={title}
          aria-label="Book title input"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          name="author"
          value={author}
          aria-label="Book author input"
          onChange={authorChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
