import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipeSlice";

const combinedReducer = combineReducers({
   recipe: recipeReducer,
});

const rootReducer = (state, action) => {
  //Do Something 
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});
