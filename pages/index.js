import React from "react";
import Clock from "../src/components/clock";
import Setup from "../src/components/setup";
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
