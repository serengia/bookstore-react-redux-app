import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },

  reducers: {
    checkStatus: (state) => state.categories.push("Under construction"),
  },
});

export const { addBook, removeBook } = categoriesSlice.actions;
export default categoriesSlice.reducer;
