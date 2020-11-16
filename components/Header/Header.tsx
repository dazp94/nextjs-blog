import Link from "next/link";
import { ReactElement } from "react";
import styled from "styled-components";
import routes from "../../config/routes";
import ThemeToggler from "../ThemeToogler";

export interface Route {
  name: string;
  route: string;
}

const HeaderContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const RoutesContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.5;
  }
`;

const Header = (): ReactElement => (
  <HeaderContainer>
    <RoutesContainer>
      {routes.map((route: Route) => (
        <Link key={route.route} href={route.route} passHref>
          <StyledLink>{route.name}</StyledLink>
        </Link>
      ))}
      <ThemeToggler />
    </RoutesContainer>
  </HeaderContainer>
);

export default Header;
