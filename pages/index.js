import React, { useState } from "react";
import Clock from "../src/components/clock/clock";
import Setup from "../src/components/setup/setup";
import Mode from "../src/components/mode/mode";
import { Wrapper, InnerWrapper, Title } from "../src/components/common/style";
import Activity from "../src/components/activity/activity";

function Index() {
  /*  */
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [mode, setMode] = useState("pomodoro");
  const [activity, setActivity] = useState("Welcome to your pomodoro!");
  const [category, setCategory] = useState("Category");
  const [status, setStatus] = useState(false);

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Title>{activity}</Title>
          <Title category>{category}</Title>
          <Mode setMode={setMode} />
          <Clock
            mode={mode}
            pomodoro={pomodoro}
            shortBreak={shortBreak}
            longBreak={longBreak}
            status={status}
          />
          <Activity setActivity={setActivity} setCategory={setCategory}/>
        </InnerWrapper>
        <Setup
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
        />
      </Wrapper>
    </>
  );
}

export default Index;
