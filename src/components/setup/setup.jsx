import React, { useState } from "react";
import {
  SetupContainer,
  SetupInnerContainer,
  SetupInput,
  SetupTitle,
  TimeWrapper,
  Button,
} from "./setup.style";

function Setup(props) {
  /* Controls visibility of the settings window */
  const [visibility, setVisibility] = useState(false);
  const [settings, setSettings] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
    relay: 4,
  });

  return (
    <>
        <Button
          onClick={function (event) {
            event.preventDefault();
            if (visibility === false) {
              setVisibility(true);
            } else {
              setVisibility(false);
            }
          }}
        />

      {visibility && (
        <SetupContainer>
          <SetupInnerContainer>
            <TimeWrapper>
              <SetupTitle timeSetup>Duration:</SetupTitle>
              <SetupInput
                timeSetup
                type="number"
                defaultValue={settings.pomodoro}
                onChange={(event) => {
                  const value = event.target.value;
                  props.setPomodoro(value);
                  setSettings((prevState) => ({
                    ...prevState,
                    pomodoro: value,
                  }));
                }}
              />
              <SetupTitle timeSetup>Short Break:</SetupTitle>
              <SetupInput
                timeSetup
                type="number"
                defaultValue={settings.short}
                onChange={(event) => {
                  const value = event.target.value;

                  props.setShortBreak(value);
                  setSettings((prevState) => ({ ...prevState, short: value }));
                }}
              />
              <SetupTitle timeSetup>Long Break:</SetupTitle>
              <SetupInput
                timeSetup
                type="number"
                defaultValue={settings.long}
                onChange={(event) => {
                  const value = event.target.value;
                  props.setLongBreak(value);
                  setSettings((prevState) => ({ ...prevState, long: value }));
                }}
              />
              <SetupTitle timeSetup>Relay:</SetupTitle>
              <SetupInput
                timeSetup
                type="number"
                defaultValue={settings.relay}
                onChange={(event) => {
                  const value = event.target.value;
                  props.setLongBreak(value);
                  setSettings((prevState) => ({ ...prevState, relay: value }));
                }}
              />
            </TimeWrapper>
          </SetupInnerContainer>
        </SetupContainer>
      )}
    </>
  );
}

export default Setup;
