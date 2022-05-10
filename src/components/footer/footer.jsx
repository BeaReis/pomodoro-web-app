import Link from "next/link";
import { Content, Foot, Github } from "./footer.style";

function Footer() {
  return (
    <>
      <Foot>
        <Link href={"https://github.com/BeaReis"}>
          <Content>Developed by @BeaReis</Content>
        </Link>
      </Foot>
    </>
  );
}

export default Footer;
