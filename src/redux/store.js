import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books/booksSlice";

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: "",
  },
});

export default store;
