import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
  savedItem: [],
};

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    saveItem: (state, action) => {
      state.saved.push(action.payload);
      localStorage.setItem("saved", JSON.stringify(state.saved));
    },
    removeItem: (state, action) => {
      // return state.saved.filter((id) => id !== action.payload);
      // return state.saved;
    },
    getSavedItem: (state, action) => {
      const Item = localStorage.getItem("saved");
      state.savedItem = Item;
    },
  },
});

export default saveSlice.reducer;

export const { saveItem, removeItem, getSavedItem } = saveSlice.actions;
