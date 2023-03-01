import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: ["All categories"],
    activeCategory: "All categories",
  },

  reducers: {
    checkStatus: (state) => state.categories.push("Under construction"),
    changeActiveCategory: (state, actions) => {
      // eslint-disable-next-line no-param-reassign
      state.activeCategory = actions.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
