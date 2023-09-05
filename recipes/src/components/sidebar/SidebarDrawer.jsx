import { Drawer } from "@mui/material";
import MainContext from "../../context/MainContext";
import { useContext } from "react";

const SidebarDrawer = ({children}) => {
  const {themeMode,drawerWidth}=useContext(MainContext);

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor:
          themeMode === "dark" ? "#222b36" : "#FFF",
          border:"none"
        }
      }}
    >
      {children}
    </Drawer>
  );
};

export default SidebarDrawer;
