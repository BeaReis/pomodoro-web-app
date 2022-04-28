import Link from "next/link";
import { Wrapper, Nav, NavItem, NavItemContainer } from "./navbar.style";

function Navbar() {
  return (
    <>
      <Nav>
        <Link href={"/"}>
          <NavItem logo>TOMATO 🍅 TIMER</NavItem>
        </Link>
        <NavItemContainer>
          <Link href={"/"}>
            <NavItem>Dashboard</NavItem>
          </Link>
          <Link href={"/"}>
            <NavItem>Login</NavItem>
          </Link>
        </NavItemContainer>
      </Nav>
    </>
  );
}

export default Navbar;
