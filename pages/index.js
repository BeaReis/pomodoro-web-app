import React, { useState } from "react";
import Clock from "../src/components/clock/clock";
import Setup from "../src/components/setup/setup";
import Mode from "../src/components/mode/mode";
import {
  Wrapper,
  InnerWrapper,
  Title,
  Button,
} from "../src/components/common/style";
import Activity from "../src/components/activity/activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Index() {
  /*  */
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [mode, setMode] = useState("pomodoro");
  const [activity, setActivity] = useState("Welcome to your pomodoro!");
  const [category, setCategory] = useState("Category");
  const [visible, setVisible] = useState(false);

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
          />
          <Activity setActivity={setActivity} setCategory={setCategory} />
        </InnerWrapper>

        <Button onClick={() => setVisible(!visible)}>
          <FontAwesomeIcon
            icon={faGear}
            size="2x"
            style={{background: 'transparent'}}
          />
        </Button>
        <Setup
          visible={visible}
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
        />
      </Wrapper>
    </>
  );
}

export default Index;
