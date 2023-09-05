import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RecipeService from "../../services/RecipeService";

const initialState = {
  recipes: [],
  recipesStatus: "idle",
  filter: "",
  favoriteRecipes: [],
  favoriteRecipesStatus: "idle",
  recipe:null,
  recipeStatus: "idle",
  operationStatus: "idle",
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
    filterChanged: (state, action) => {
      state.filter = action.payload;
      state.recipesStatus = "idle";
    },
    refreshRecipeStatus: (state, action) => {
        state.recipeStatus = "idle";
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllRecipesAsync.pending, (state, action) => {
        state.recipesStatus = "loading";
      })
      .addCase(getAllRecipesAsync.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.recipesStatus = "succeeded";
      })
      .addCase(getAllRecipesAsync.rejected, (state, action) => {
        state.recipesStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getRecipeByIdAsync.pending, (state, action) => {
        state.recipeStatus = "loading";
      })
      .addCase(getRecipeByIdAsync.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.recipeStatus = "succeeded";
      })
      .addCase(getRecipeByIdAsync.rejected, (state, action) => {
        state.recipeStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getFavoriteRecipesAsync.pending, (state, action) => {
        state.favoriteRecipesStatus = "loading";
      })
      .addCase(getFavoriteRecipesAsync.fulfilled, (state, action) => {
        state.favoriteRecipes = action.payload;
        state.favoriteRecipesStatus = "succeeded";
      })
      .addCase(getFavoriteRecipesAsync.rejected, (state, action) => {
        state.favoriteRecipesStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(toggleFavoriteRecipeAsync.pending, (state, action) => {
        state.operationStatus = "loading";
      })
      .addCase(toggleFavoriteRecipeAsync.fulfilled, (state, action) => {
        state.operationStatus = "succeeded";
        state.recipesStatus = "idle";
        state.favoriteRecipesStatus = "idle";
      })
      .addCase(toggleFavoriteRecipeAsync.rejected, (state, action) => {
        state.operationStatus = "failed";
      });
  },
});

export const getAllRecipesAsync = createAsyncThunk("recipe/getAllRecipes", async (args, { getState }) => {
  const { recipe: state } = getState();
  try {
    const result = await RecipeService.getAllRecipes(state.filter);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getRecipeByIdAsync = createAsyncThunk("recipe/getRecipeByIdAsync", async (id) => {
  const recipeId = id;
  try {
    const result = await RecipeService.getRecipeById(recipeId);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getFavoriteRecipesAsync = createAsyncThunk("recipe/getFavoriteRecipes", async () => {
  try {
    const result = await RecipeService.getFavoriteRecipes();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const toggleFavoriteRecipeAsync = createAsyncThunk("recipe/toggleFavoriteRecipe", async (id) => {
  const recipeId = id;
  try {
    const result = await RecipeService.toggleFavoriteRecipe(recipeId);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const { filterChanged ,refreshRecipeStatus} = recipeSlice.actions;
export default recipeSlice.reducer;
