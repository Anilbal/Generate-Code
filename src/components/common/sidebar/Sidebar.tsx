import { SidebarContainer, SidebarItem, SidebarTitle } from "./Sidebar.styles";
import { sections } from "./Sidebar.data";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Components</SidebarTitle>
      {sections.map((section) => {
        const Icon=section.icon;
        return <SidebarItem key={section.name}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flex: 1,
            }}
          >
            <Icon />
            {section.name}
          </div>
        </SidebarItem>;
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
