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
  const [relay, setRelay] = useState("");
  const [alarm, setAlarm] = useState("active");
  const [settings, setSettings] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
    relay: 4,
  });
  const [volume, setVolume] = useState(50);

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
                min={1}
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
                min={1}
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
                min={1}
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
                min={1}
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
                property={relay}
                onClick={() => {
                  if (props.relayState === true) {
                    setRelay("");
                    props.setRelayState(false);
                  } else {
                    setRelay("active");
                    props.setRelayState(true);
                  }
                }}
              />
            </TimeWrapper>
            <Title>Sound</Title>
            <Separator />
            <TimeWrapper sound>
              <SetupTitle>Volume:</SetupTitle>
              <Volume
                type="range"
                value={volume}
                min={1}
                max={100}
                step={1.5}
                onChange={(event) => {
                  const value = event.target.value;
                  setVolume(value);
                  props.setVolume(value / 100);
                }}
              />
              <SetupTitle timeSetup>Alarm sound:</SetupTitle>
              <SwitchContainer
                property={alarm}
                onClick={() => {
                  if (props.alarmState === true) {
                    setAlarm("");
                    props.setAlarmState(false);
                  } else {
                    setAlarm("active");
                    props.setAlarmState(true);
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
