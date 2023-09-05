import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainContext from "../../context/MainContext";
import { useContext } from "react";

const SearchBar = () => {
  const { themeMode } = useContext(MainContext);

  return (
    <Box
      display="flex"
      backgroundColor={themeMode === "dark" ? "#222b36" : "#FFF"}
      borderRadius="3px"
    >
      <InputBase
        sx={{
          ml: 3,
          flex: 1,
          "& ::placeholder": {
            color: "secondary.main",
          },
        }}
        placeholder={"Search"}
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon sx={{ color: "secondary.main" }} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
