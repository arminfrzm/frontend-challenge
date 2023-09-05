import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFavoriteRecipesAsync } from "../../features/recipe/recipeSlice";
import { Helmet } from "react-helmet-async";
import RecipeCard from "../../components/common/RecipeCard";
import { Box } from "@mui/material";

const MyCollection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favoriteRecipes, favoriteRecipesStatus } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (favoriteRecipesStatus === "idle") {
      dispatch(getFavoriteRecipesAsync());
    }
  }, [favoriteRecipesStatus, dispatch, navigate]);

  return (
    <>
      <Helmet>
        <title>{"Favorite Recipes"}</title>
      </Helmet>
      <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((recipe, index) => (
            <Box sx={{ m: 1 }} key={index}>
              <RecipeCard recipe={recipe} />
            </Box>
          ))
        ) : (
          <Box>You Have Not Any Favorite Recipe In Your Collection</Box>
        )}
      </Box>
    </>
  );
};

export default MyCollection;
