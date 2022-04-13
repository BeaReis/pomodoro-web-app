import React, { useState } from "react";
import Clock from "../src/components/clock/clock";
import Setup from "../src/components/setup/setup";
import Mode from "../src/components/mode/mode";
import { Wrapper, InnerWrapper } from "../src/components/common/style";

function Index() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [mode, setMode] = useState("Pomodoro");

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Mode setMode={setMode} />
          <Clock
            mode={mode}
            pomodoro={pomodoro}
            shortBreak={shortBreak}
            longBreak={longBreak}
          />
        </InnerWrapper>
        <Setup
          setPomoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
        />
      </Wrapper>
    </>
  );
}

export default Index;
