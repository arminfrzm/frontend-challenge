import { ThemeProvider, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MainLayoutContainer from "../containers/MainLayoutContainer";
import MainContext from "../context/MainContext";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/theme";
import { useEffect } from "react";

const MainLayout = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? "dark" : "light");
  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    const savedTheme = localStorage.getItem("recipes-theme");
    let newTheme = "";
    if (savedTheme !== null && savedTheme !== undefined) {
      newTheme = savedTheme === "dark" ? "light" : "dark";
    } else {
      newTheme = prefersDarkMode ? "light" : "dark";
    }
    localStorage.setItem("recipes-theme", newTheme);
  };
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("recipes-theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      setThemeMode(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <MainContext.Provider
        value={{
          mobileDrawerOpen,
          handleMobileDrawerToggle,
          themeMode: themeMode,
          drawerWidth: 240,
          toggleThemeMode: handleThemeChange,
        }}
      >
        <MainLayoutContainer>
          <Outlet />
        </MainLayoutContainer>
      </MainContext.Provider>
    </ThemeProvider>
  );
};

export default MainLayout;
