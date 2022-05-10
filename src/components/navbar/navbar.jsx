import Link from "next/link";
import { ROUTES } from "../../settings";
import { Nav, NavItem, NavItemContainer } from "./navbar.style";

function Navbar() {
  return (
    <>
      <Nav>
        <Link href={ROUTES.root}>
          <NavItem logo>TIMER 🍅 POMODORO</NavItem>
        </Link>
        <NavItemContainer>
          {/* <Link href={"/"}>
            <NavItem>About</NavItem>
          </Link> */}
          {/* <Link href={"/"}>
            <NavItem>Dashboard</NavItem>
          </Link> */}
          <Link href={"/"}>
            <NavItem>Login</NavItem>
          </Link>
        </NavItemContainer>
      </Nav>
    </>
  );
}

export default Navbar;
