import axios from "axios";
const baseUrl = "http://localhost:9000";

class RecipeService {
  async getAllRecipes(filter) {
    const {data:recipes} = await axios.get(baseUrl + "/recipes");
    const filteredRecipes = recipes.filter((recipe) => recipe.name.includes(filter) || recipe.ingredients.includes(filter));
    return filteredRecipes;
    
  }

  async getRecipeById(recipeId) {
    const {data:recipe} = await axios.get(`${baseUrl}/recipes/${recipeId}`);
    return recipe;
    
  }

  async getFavoriteRecipes() {
    const { data:favoriteRecipes } = await axios.get(baseUrl + "/recipes");
    const filteredRecipes = favoriteRecipes.filter((recipe) => recipe.isFavorite);
    return filteredRecipes;
  }

  async toggleFavoriteRecipe(recipeId) {
    const { data:recipeDetails } = await axios.get(`${baseUrl}/recipes/${recipeId}`);
    await axios.put(`${baseUrl}/recipes/${recipeId}`, {
        id:recipeDetails.id,
        isFavorite:!recipeDetails.isFavorite,
        name:recipeDetails.name,
        recipe:recipeDetails.recipe,
        ingredients:recipeDetails.ingredients,
        picture:recipeDetails.picture
    });
  }
}

export default new RecipeService();
