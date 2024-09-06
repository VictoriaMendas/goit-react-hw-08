import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "src/filters/slice.js";
import contactsReducer from "src/contacts/operations.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
