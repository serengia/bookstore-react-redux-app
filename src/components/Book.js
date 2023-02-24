import React from "react";

function Book(props) {
  const { title, author, id } = props;
  return (
    <div>
      <h2>{title}</h2>
      <span>By{author}</span>
      <button type="button" data-id={id}>
        Remove
      </button>
    </div>
  );
}

export default Book;
