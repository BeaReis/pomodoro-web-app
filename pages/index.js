import React from "react";
import Clock from "../src/components/clock/clock";
import Setup from "../src/components/setup/setup";
import { Wrapper } from "../src/components/common/style";

function Index() {
  return (
    <>
    <Wrapper>
      <Clock />
      <Setup />
    </Wrapper>
    </>
  );
}

export default Index;
