import React, { useState, useEffect } from "react";
import { ButtonLabel, Container, ModeButton, Span } from "./mode.style";

function Mode(props) {
  const [checked, setChecked] = useState(["pomodoro", "", ""]);

  // This useEffect changes the checked array according to current mode 
  // (checked is used to change component property)
  useEffect(() => {
    switch (props.mode) {
      case "pomodoro":
        setChecked(["pomodoro", "", ""]);
        break;
      case "short":
        setChecked(["", "short", ""]);
        break;
      case "long":
        setChecked(["", "", "long"]);
        break;
      default:
        console.log(props.mode);
    }
  }, [props.mode]);

  // These functions set 'checked' and mode states to the mode selected
  const handlePomodoroModeOnClick = () => {
    setChecked(["pomodoro", "", ""]);
    props.setMode(checked[0]);
  }

  const handleShortBreakModeOnClick = () => {
    setChecked(["", "short", ""]);
    props.setMode(checked[1]);
  }

  const handleLongBreakModeOnClick = () => {
    setChecked(["", "", "long"]);
    props.setMode(checked[2]);
  }

  return (
    <>
      <Container>
        <ButtonLabel
          aria-label="pomodoro mode"
          property={checked[0]}
          onClick={handlePomodoroModeOnClick}
        >
          <ModeButton type="radio" name="button" defaultChecked />
          <Span />
          Pomodoro
        </ButtonLabel>
        <ButtonLabel
          aria-label="short break mode"
          property={checked[1]}
          onClick={handleShortBreakModeOnClick}
        >
          <ModeButton type="radio" name="button" />
          <Span />
          Short Break
        </ButtonLabel>
        <ButtonLabel
          aria-label="long break mode"
          property={checked[2]}
          onClick={handleLongBreakModeOnClick}
        >
          <ModeButton type="radio" name="button" />
          <Span />
          Long Break
        </ButtonLabel>
      </Container>
    </>
  );
}

export default Mode;
