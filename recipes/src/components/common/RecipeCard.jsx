import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, IconButton, Typography } from "@mui/material";
import MainContext from "../../context/MainContext";

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  const truncatedText = text.substring(0, maxLength) + "...";
  return <span>{truncatedText}</span>;
};

const RecipeCard = ({ recipe, toggleFavorite,showRecipeDetails }) => {
  const { themeMode } = useContext(MainContext);


  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: themeMode === "dark" ? "wrapper.main" : "#FFF",
        backgroundImage: "none",
        "&:hover": {
          backgroundColor: "neutral.main", // Change the background color on hover
        },
      }}
    >
      <CardHeader title={recipe.name} />
      <CardMedia component="img" height="194" image={recipe.picture} alt="Paella dish" />
      <CardContent>
        <Typography color="text.secondary">
          <TruncateText text={recipe.recipe} maxLength={250} />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              toggleFavorite(recipe.id);
            }}
          >
            {recipe.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Button sx={{color:themeMode === "dark" ? "#FFF" : "#000"}} onClick={()=>showRecipeDetails(recipe.id)}>{"More"}</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
