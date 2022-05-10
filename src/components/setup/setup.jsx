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
  // Controls visibility of the setup setSetup
  const visibility = props.visible;
  //
  const [relay, setRelay] = useState("");
  const [alarm, setAlarm] = useState("active");
  const [volume, setVolume] = useState(50);
  const [setup, setSetup] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
    relay: 4,
  });
  // Settings
  const min = 5;
  const max = 60;
  const step = 5;
  const minRelay = 2;
  const maxRelay = 8;

  const handleDurationOnChange = (event) => {
    let value = event.target.value;
    if (value === "") return;
    if (value < 1) value = 1;
    if (value > 60) value = 60;
    props.setPomodoro(value);
    event.target.value = value;
    setSetup((prevState) => ({
      ...prevState,
      pomodoro: value,
    }));
  };

  const handleDurationOnBlur = (event) => {
    let value = event.target.value;
    if (value === "") {
      event.target.value = setup.pomodoro;
      props.setPomodoro(setup.pomodoro);
    }
  };

  const handleShortBreakOnChange = (event) => {
    let value = event.target.value;
    if (value === "") return;
    if (value < 1) value = 1;
    if (value > 60) value = 60;
    props.setShortBreak(value);
    setSetup((prevState) => ({
      ...prevState,
      short: value,
    }));
  };

  const handleShortBreakOnBlur = (event) => {
    let value = event.target.value;
    if (value === "") {
      event.target.value = setup.short;
      props.setPomodoro(setup.short);
    }
  };

  const handleLongBreakOnChange = (event) => {
    let value = event.target.value;
    if (value === "") return;
    if (value < 1) value = 1;
    if (value > 60) value = 60;
    props.setLongBreak(value);
    setSetup((prevState) => ({
      ...prevState,
      long: value,
    }));
  };

  const handleLongBreakOnBlur = (event) => {
    let value = event.target.value;
    if (value === "") {
      event.target.value = setup.long;
      props.setPomodoro(setup.long);
    }
  };

  // const handleRelayOnChange = (event) => {
  //   let value = event.target.value;
  //   setSetup((prevState) => ({
  //     ...prevState,
  //     relay: value
  //   }));
  // }

  // // Turn On/Off relay setting
  // const handleActivateRelayOnClick = () => {
  //   if (props.relayState === true) {
  //     setRelay("");
  //     props.setRelayState(false);
  //   } else {
  //     setRelay("active");
  //     props.setRelayState(true);
  //   }
  // }

  // Turn On/Off alarm sound
  const handleAlarmSoundOnClick = () => {
    if (props.alarmState === true) {
      setAlarm("");
      props.setAlarmState(false);
    } else {
      setAlarm("active");
      props.setAlarmState(true);
    }
  };

  // Sets alarm ound volume
  const handleVolumeOnChange = (event) => {
    let value = event.target.value;
    setVolume(value);
    props.setVolume(value / 100);
  };

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
                min={min}
                step={step}
                max={max}
                timeSetup
                type="number"
                defaultValue={setup.pomodoro}
                onChange={handleDurationOnChange}
                onBlur={handleDurationOnBlur}
              />
              <SetupTitle timeSetup>Short Break:</SetupTitle>
              <SetupInput
                min={min}
                step={step}
                max={max}
                timeSetup
                type="number"
                defaultValue={setup.short}
                onChange={handleShortBreakOnChange}
                onBlur={handleShortBreakOnBlur}
              />
              <SetupTitle timeSetup>Long Break:</SetupTitle>
              <SetupInput
                min={min}
                step={step}
                max={max}
                timeSetup
                type="number"
                defaultValue={setup.long}
                onChange={handleLongBreakOnChange}
                onBlur={handleLongBreakOnBlur}
              />
              <SetupTitle timeSetup>Relay:</SetupTitle>
              <SetupInput
                property="inactive"
                disabled={true}
                min={minRelay}
                max={maxRelay}
                timeSetup
                type="number"
                defaultValue={setup.relay}
                //onChange={handleRelayOnChange}
              />
              <SetupTitle timeSetup>Activate relay: </SetupTitle>
              <SwitchContainer
                property={relay}
                //onClick={handleActivateRelayOnClick}
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
                onChange={handleVolumeOnChange}
              />
              <SetupTitle timeSetup>Alarm sound:</SetupTitle>
              <SwitchContainer
                property={alarm}
                onClick={handleAlarmSoundOnClick}
              />
            </TimeWrapper>
          </SetupInnerContainer>
        </SetupContainer>
      )}
    </>
  );
}

export default Setup;
