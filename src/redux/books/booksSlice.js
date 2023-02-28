/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../globals";

export const postBook = createAsyncThunk(
  "books/postBook",
  async (bookData, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, bookData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

export const getBooks = createAsyncThunk(
  "books/postBook",
  async (_, thunkAPI) => {
    try {
      const res = await axios(API_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

const initialState = {
  isLoading: false,
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
  extraReducers: (builder) => {
    // posting a book
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.push(action.payload);
      })
      .addCase(postBook.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });

    // get books
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
