import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  top: 0px;
  width: 100vw;
  height: 60px;
  background-color: ${scheme.colors.neutrals[100]};
  box-shadow: 0 0 10px 5px rgb(0 0 0/ 50%);
  z-index: 100;
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled.a`
  display: flex;
  font-family: ${(props) => (props.logo ? "Pacifico" : "Montserrat")};
  background-color: ${scheme.colors.neutrals[100]};
  border-radius: 5px;
  margin: auto 15px;
  cursor: pointer;
  :hover {
    color: ${scheme.colors.primary[300]};
    transition: 0.5s;
  }
  @media (max-width: 720px) {
    font-size: ${(props) => (props.logo ? "12px" : "14px")};
  }
`;
