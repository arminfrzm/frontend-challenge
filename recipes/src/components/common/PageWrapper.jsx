import { Box } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

const PageWrapper = ({ children }) => {
  const { themeMode } = useContext(MainContext);
  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        backgroundColor: themeMode === "dark" ? "#222b36" : "#FFF",
        padding: 2,
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
