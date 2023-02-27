import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, actions) => {
      const bookData = actions.payload;
      state.books.push(bookData);
    },

    removeBook: (state, actions) => {
      const idOfBookToRemove = actions.payload.id;
      state.books.filter((book) => book.id !== idOfBookToRemove);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
