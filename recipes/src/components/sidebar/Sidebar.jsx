import SidebarDrawer from "./SidebarDrawer";
import SidebarMobileDrawer from "./SidebarMobileDrawer";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <>
      <SidebarMobileDrawer>
        <SidebarContent />
      </SidebarMobileDrawer>
      <SidebarDrawer>
        <SidebarContent />
      </SidebarDrawer>
    </>
  );
};
export default Sidebar;
