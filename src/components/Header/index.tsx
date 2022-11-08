import { BracketsAngle, Clock, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <BracketsAngle size={32} weight="thin" />
      <nav>
        <NavLink to="/" title="Timer">
          <Clock size={24} weight="bold" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} weight="bold" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
