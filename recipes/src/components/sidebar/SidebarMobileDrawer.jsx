import { Drawer } from "@mui/material";
import MainContext from "../../context/MainContext";
import { useContext } from "react";

const SidebarMobileDrawer = ({children}) => {
  const {mobileDrawerOpen,handleMobileDrawerToggle,themeMode,drawerWidth}=useContext(MainContext);
  return (
    <Drawer
      variant="temporary"
      open={mobileDrawerOpen}
      onClose={handleMobileDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor:
          themeMode === "dark" ? "#222b36" : "#FFF",
          backgroundImage:"none"
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default SidebarMobileDrawer;
