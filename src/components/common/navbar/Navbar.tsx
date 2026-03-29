import { DropdownIcon, ExportIcon, PreviewIcon } from "../icons/Icons";
import { Button, ButtonContainer, NavbarContainer } from "./Navbar.styles";
import Logo from "./logo/Logo";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo />
      <ButtonContainer>
        <Button variant="outline">
          <PreviewIcon /> preview
        </Button>
        <Button variant="solid">
          <ExportIcon /> export <DropdownIcon />
        </Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};
export default Navbar;
