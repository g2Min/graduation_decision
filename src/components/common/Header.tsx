import Nav from "./Nav";
import { HeaderBox, HeaderContainer, LogoIcon } from "./style";
import logo from 'assets/icons/동국대학교 로고.svg';

const Header = () => {
  return(
    <HeaderBox>
      <HeaderContainer>
        <LogoIcon src={logo} />
        <Nav />
      </HeaderContainer>
    </HeaderBox>
  );
}

export default Header;