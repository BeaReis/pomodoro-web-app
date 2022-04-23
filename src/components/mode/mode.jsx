import React, { useState, useEffect } from "react";
import { ButtonLabel, Container, ModeButton, Span } from "./mode.style";

function Mode(props) {
  const [checked, setChecked] = useState(["pomodoro", "", ""]);

  return (
    <>
      <Container>
        <ButtonLabel
          property={checked[0]}
          onClick={() => {
            setChecked(["pomodoro", "", ""]);
            props.setMode(checked[0]);
          }}
        >
          <ModeButton type="radio" name="button" defaultChecked />
          <Span />
          Pomodoro
        </ButtonLabel>
        <ButtonLabel
          property={checked[1]}
          onClick={() => {
            setChecked(["", "short", ""]);
            props.setMode(checked[1]);
          }}
        >
          <ModeButton type="radio" name="button" />
          <Span />
          Short Break
        </ButtonLabel>
        <ButtonLabel
          property={checked[2]}
          onClick={() => {
            setChecked(["", "", "long"]);
            props.setMode(checked[2]);
          }}
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
