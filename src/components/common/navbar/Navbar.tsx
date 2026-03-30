import { Link } from "@tanstack/react-router";
import { DropdownIcon, ExportIcon, PreviewIcon } from "../icons/Icons";
import { Button, ButtonContainer, NavbarContainer } from "./Navbar.styles";
import Logo from "./logo/Logo";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo />
      <ButtonContainer>
        <Link to="/preview" target="_blank">
        <Button variant="outline">
          <PreviewIcon /> preview
        </Button>
        </Link>
        <Button variant="solid">
          <ExportIcon /> export <DropdownIcon />
        </Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};
export default Navbar;
