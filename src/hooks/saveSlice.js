import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  savedItems: localStorage.getItem("savedItems")
    ? JSON.parse(localStorage.getItem("savedItems"))
    : [],
};

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    saveItem: (state, action) => {
      state.savedItems.push(action.payload);
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
      toast.success(`You saved ${action.payload.pname}`, {
        position: "top-center",
      });
    },
    removeItem: (state, action) => {
      const nextSavedItem = state.savedItems.filter(
        (product) => product._id !== action.payload._id
      );
      state.savedItems = nextSavedItem;
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
      toast.info(`You removed ${action.payload.pname}`, {
        position: "top-center",
      });
    },
  },
});

export default saveSlice.reducer;

export const { saveItem, removeItem } = saveSlice.actions;
