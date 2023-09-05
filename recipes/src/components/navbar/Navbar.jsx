import { useContext, useEffect } from "react";
import { AppBar, Toolbar, Box, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MainContext from "../../context/MainContext";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipesAsync } from "../../features/recipe/recipeSlice";

const Navbar = () => {
  const { handleMobileDrawerToggle, toggleThemeMode, drawerWidth, themeMode } = useContext(MainContext);
  const dispatch = useDispatch();
  const { recipes, recipesStatus } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (recipesStatus === "idle") {
      dispatch(getAllRecipesAsync());
    }
  }, [recipesStatus, dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: themeMode === "dark" ? "#171c24" : "#f3f4f9",
          }}
        >
          <IconButton size="large" edge="start" aria-label="open drawer" onClick={handleMobileDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
          {/* Menu Icons */}
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton onClick={toggleThemeMode} size="large" aria-label="change theme mode" sx={{ mr: 1 }}>
              {themeMode === "dark" ? <DarkModeOutlinedIcon sx={{ color: "secondary.main" }} /> : <LightModeOutlinedIcon sx={{ color: "secondary.main" }} />}
            </IconButton>
            <IconButton size="large" aria-label="show 0 new notifications" sx={{ mr: 1 }}>
              <Badge badgeContent={(recipes.filter(r=>r.isFavorite)).length} color="error">
                <BookmarkBorderIcon sx={{ color: "secondary.main" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
