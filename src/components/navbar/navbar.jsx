import { Login, Nav, NavItem, NavItemContainer } from "./navbar.style";

function Navbar() {
  return (
    <>
      <Nav>
        <NavItemContainer>
          <NavItem>HOME</NavItem>
          <NavItem>ABOUT</NavItem>
        </NavItemContainer>
        <Login>LOGIN</Login>
      </Nav>
    </>
  );
}

export default Navbar;