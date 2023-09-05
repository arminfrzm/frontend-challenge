import React, { useEffect } from "react";
import PageWrapper from "../../components/common/PageWrapper";
import { useParams } from "react-router-dom";
import { getRecipeByIdAsync } from "../../features/recipe/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/common/Loading";
import { Avatar, Box, Typography } from "@mui/material";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipe, recipeStatus } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (recipeStatus === "idle") {
      dispatch(getRecipeByIdAsync(recipeId));
    }
  }, [recipeStatus, dispatch, recipeId]);

  return (
    <PageWrapper>
      {recipeStatus === "loading" ? (
        <Loading />
      ) : recipe !== null ? (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Avatar alt={recipe.name} src={recipe.picture} sx={{ width: 200, height: 200 }} />
          <Typography sx={{ m: 3 }}>{recipe.name}</Typography>
          <Typography sx={{ m: 3 }}>{recipe.recipe}</Typography>
          <Typography sx={{ mt: 3 }}>{"Ingredients:"}</Typography>
          {recipe.ingredients.map((ingredient, index) => (
          <Typography key={index} variant="body1">
            {ingredient}
          </Typography>
        ))}
        </Box>
      ) : undefined}
    </PageWrapper>
  );
};

export default RecipeDetails;
