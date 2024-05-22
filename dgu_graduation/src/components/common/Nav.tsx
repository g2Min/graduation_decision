import { useMemo } from "react";
import { FocusedNavItem, NavContainer, NavItem } from "./style";
import { useNavigate, useLocation } from "react-router-dom";

type navItem = {
  name: string;
  src: string;
};
type navItems = navItem[];
const Nav = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const navDefaultItems = useMemo<navItems>(
    () => [
      {
        name: "e-book",
        src: "/",
      },
      {
        name: "졸업진단",
        src: "/decide",
      },
    ],
    []
  );
  return (
    <NavContainer>
      {navDefaultItems.map((item, idx) => {
        const isFocused = location.pathname.endsWith(item.src);
        return isFocused ? (
          <FocusedNavItem key={idx} onClick={() => navigation(item.src)}>
            {item.name}
          </FocusedNavItem>
        ) : (
          <NavItem key={idx} onClick={() => navigation(item.src)}>
            {item.name}
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default Nav;
