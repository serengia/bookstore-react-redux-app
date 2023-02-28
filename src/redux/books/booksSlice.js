/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../globals";

export const postBook = createAsyncThunk(
  "books/postBook",
  async (bookData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/books`, bookData);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}/books`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${API_URL}/books/${id}`);

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
  books: [],
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
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      });

    // get books
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const resObject = action.payload;

        const newBooksArr = [];
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const id in resObject) {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        }

        state.books = newBooksArr;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });

    // delete books
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      console.log("SUCCESS>", action.payload);
    });
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
