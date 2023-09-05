import { DashboardOutlined,BookmarkBorder } from "@mui/icons-material";

export const sidebarMenu = [
  {
    type: "single",
    title: "Recipes",
    link: "/",
    icon: <DashboardOutlined />,
  },
  {
    type: "single",
    title: "MyCollection",
    link: "/MyCollection",
    icon: <BookmarkBorder />,
  },
];
