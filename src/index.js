import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import ListingReducer, { ListingsFetch } from "./hooks/ListingSlice";
import { ListingApi } from "./hooks/ListingApi";
import { Provider } from "react-redux";
import authReducer, { loadUser } from "./hooks/authSlice";

const store = configureStore({
  reducer: {
    listing: ListingReducer,
    auth: authReducer,
    [ListingApi.reducerPath]: ListingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ListingApi.middleware),
});

store.dispatch(ListingsFetch());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
