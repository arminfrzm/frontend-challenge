import { Helmet } from "react-helmet-async";
import RecipeCard from "../../components/common/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { filterChanged, getAllRecipesAsync,refreshRecipeStatus,toggleFavoriteRecipeAsync } from "../../features/recipe/recipeSlice";
import { Box, InputBase } from "@mui/material";

const Recipes = () => {
  const filterDeferrer = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipes, recipesStatus } = useSelector((state) => state.recipe);

  useEffect(() => {
    filterDeferrer.current = window.setTimeout(() => {}, 1500);
    if (recipesStatus === "idle") {
      dispatch(getAllRecipesAsync());
    }
  }, [recipesStatus, dispatch, navigate]);

  const handleFilter = (filter) => {
    if (filterDeferrer.current) {
      clearTimeout(filterDeferrer.current);
      filterDeferrer.current = window.setTimeout(() => {
        clearTimeout(filterDeferrer.current);
        dispatch(filterChanged(filter));
      }, 1500);
    }
  };

  const toggleFavoriteRecipe = (recipeId) => {
    dispatch(toggleFavoriteRecipeAsync(recipeId));
  };

  const showRecipeDetails=(recipeId)=>{
    dispatch(refreshRecipeStatus());
    navigate(`/RecipeDetails/${recipeId}`)
  }

  return (
    <>
      <Helmet>
        <title>{"Recipes"}</title>
      </Helmet>
      <Box sx={{ m: 3 }}>
        <Box display="flex" sx={{ border: "1px solid #8ca3ba", borderRadius: "8px", py: "5px", px: "5px" }}>
          <SearchIcon sx={{ color: "secondary.main", mt: "4px", ml: 2 }} />
          <InputBase
            sx={{
              ml: 3,
              flex: 1,
              width: { xs: "100px", md: "300px" },
              "& ::placeholder": {
                color: "secondary.main",
              },
            }}
            placeholder={"Search"}
            onInput={(e) => handleFilter(e.target.value)}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {recipes.map((recipe, index) => (
          <Box sx={{ m: 1 }} key={index}>
            <RecipeCard recipe={recipe} toggleFavorite={toggleFavoriteRecipe} showRecipeDetails={showRecipeDetails} />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default Recipes;
