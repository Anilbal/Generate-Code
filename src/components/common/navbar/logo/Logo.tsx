import { CodeIcon } from "../../icons/Icons";
import { IconWrapper, LogoContainer } from "../Navbar.styles";

const Logo: React.FC = () => (
  <LogoContainer>
    <h1>generative-code</h1>
    <IconWrapper>
      <CodeIcon />
    </IconWrapper>
  </LogoContainer>
);
export default Logo;
