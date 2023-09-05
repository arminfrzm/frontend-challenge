import {
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainContext from "../../context/MainContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../data/sidebarMenu";

const SidebarContent = () => {
  const { themeMode } = useContext(MainContext);
  const url = window.location.href;
  const pathname = new URL(url).pathname;

  return (
    <Box>
      <Toolbar>
        <Typography variant="h3" sx={{ color: "primary.main", ml: 1, fontWeight: 800 }}>
          R
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          ECIPES
        </Typography>
      </Toolbar>

      <List
        sx={{
          maxHeight: "90vh",
          overflowY: "scroll",
          mt: 1,
        }}
      >
        {sidebarMenu.map((menuItem, index) =>
          menuItem.type === "single" ? (
            <NavLink
              key={menuItem.title}
              to={menuItem.link}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem sx={{ mt: -1 }}>
                <ListItemButton
                  sx={{
                    borderRadius: "10px",
                    backgroundColor:
                      themeMode === "dark" ? (pathname === menuItem.link ? "#223141" : "") : pathname === menuItem.link ? "#f2f9fe" : "",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: pathname === menuItem.link ? "primary.main" : "neutral.main",
                    }}
                  >
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      ml: -2,
                      color: pathname === menuItem.link ? "primary.main" : "neutral.main",
                    }}
                  >
                    <Typography variant={"h5"}>{menuItem.title}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ) : (
            <Accordion
              key={menuItem.title}
              disableGutters={true}
              // defaultExpanded={menuItem.childsLinks.includes(pathname)}
              sx={{
                "&.MuiAccordion-root": {
                  boxShadow: "none",
                  borderTop: "none",
                  margin: 0,
                  backgroundColor: themeMode === "dark" ? "#222b36" : "#FFF",
                  backgroundImage: "none",
                },
                "&:before": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: menuItem.childsLinks.includes(pathname) ? "primary.main" : "neutral.main" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  color: menuItem.childsLinks.includes(pathname) ? "primary.main" : "neutral.main",
                  px: 4,
                  mb: 1,
                  backgroundColor:
                    themeMode === "dark"
                      ? menuItem.childsLinks.includes(pathname)
                        ? "#223141"
                        : ""
                      : menuItem.childsLinks.includes(pathname)
                      ? "#f2f9fe"
                      : "",
                }}
              >
                {menuItem.icon}
                <Typography sx={{ ml: "18px" }} variant={"h5"}>
                  {menuItem.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  "&.MuiAccordionDetails-root": {
                    pt: 0,
                    pb: 1,
                    px: 1,
                  },
                }}
              >
                {menuItem.items.map((subMenuItem, index) => (
                  <NavLink
                    key={subMenuItem.title}
                    to={subMenuItem.link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          "&.MuiListItemButton-root": {
                            ml: 2,
                            mt: 1,
                            borderRadius: "10px",
                            backgroundColor:
                              themeMode === "dark"
                                ? pathname === subMenuItem.link
                                  ? "#223141"
                                  : ""
                                : pathname === subMenuItem.link
                                ? "#f2f9fe"
                                : "",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: pathname === subMenuItem.link ? "primary.main" : "neutral.main",
                          }}
                        >
                          {subMenuItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subMenuItem.title}
                          sx={{
                            ml: -2,
                            color: pathname === subMenuItem.link ? "primary.main" : "neutral.main",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
          )
        )}
      </List>
    </Box>
  );
};

export default SidebarContent;
