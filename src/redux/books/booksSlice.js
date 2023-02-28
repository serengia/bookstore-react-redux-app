import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const bookData = actions.payload;
      state.books.push(bookData);
    },

    removeBook: (state, actions) => {
      const idOfBookToRemove = actions.payload;
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter(
        (book) => book.item_id !== idOfBookToRemove
      );
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
