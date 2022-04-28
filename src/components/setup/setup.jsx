import React, { useState } from "react";
import {
  SetupContainer,
  SetupInnerContainer,
  SetupInput,
  SetupTitle,
  TimeWrapper,
  Title,
  Separator,
  SwitchContainer,
  Volume,
} from "./setup.style";

function Setup(props) {
  /* Controls visibility of the settings window */
  const visibility = props.visible;
  const [relayState, setRelayState] = useState("");
  const [volumeState, setVolumeState] = useState("");
  const [settings, setSettings] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
    relay: 4,
  });

  return (
    <>
      {visibility && (
        <SetupContainer>
          <SetupInnerContainer>
            <Title>Timer</Title>
            <Separator />
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
                  //setSettings((prevState) => ({ ...prevState, relay: value }));
                }}
              />
              <SetupTitle timeSetup>Activate relay: </SetupTitle>
              <SwitchContainer
                property={relayState}
                onClick={() => {
                  if (relayState === "active") {
                    setRelayState("");
                  } else {
                    setRelayState("active");
                  }
                }}
              />
            </TimeWrapper>
            <Title>Sound</Title>
            <Separator />
            <TimeWrapper sound>
              <SetupTitle>Volume:</SetupTitle>
              <Volume type="range"/>
              <SetupTitle timeSetup>Alarm sound:</SetupTitle>
              <SwitchContainer
                property={volumeState}
                onClick={() => {
                  if (volumeState === "active") {
                    setVolumeState("");
                  } else {
                    setVolumeState("active");
                  }
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
