import { configureStore, combineReducers } from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
 
});

const rootReducer = (state, action) => {
 
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
