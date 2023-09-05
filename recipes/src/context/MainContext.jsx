import { createContext } from "react";

export default createContext({
    mobileDrawerOpen:false,
    handleMobileDrawerToggle:()=>{},
    themeMode:null,
    drawerWidth:0,
    toggleThemeMode: () => {},
    defaultLanguage:null
});